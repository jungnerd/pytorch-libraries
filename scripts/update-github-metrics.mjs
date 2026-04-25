import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outputPath = `${root}/data/github-metrics.json`;

const repos = [
  "pytorch/pytorch",
  "pytorch/vision",
  "pytorch/audio",
  "pytorch/data",
  "pytorch/torchtitan",
  "pytorch/ao",
  "pytorch/FBGEMM",
  "pytorch/PiPPy",
  "pytorch/executorch",
  "pytorch/serve",
  "pytorch/TensorRT",
  "pytorch/xla",
  "pytorch/rl",
  "pytorch/tensordict",
  "pytorch/torchrec",
  "pytorch/botorch",
  "pytorch/kineto",
  "pytorch/benchmark"
];

const headers = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28"
};

if (process.env.GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

async function fetchRepo(repo) {
  const response = await fetch(`https://api.github.com/repos/${repo}`, { headers });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GitHub request failed for ${repo}: ${response.status} ${body}`);
  }

  const data = await response.json();

  return {
    repo,
    stars: data.stargazers_count ?? 0,
    pushedAt: data.pushed_at,
    archived: Boolean(data.archived),
    htmlUrl: data.html_url
  };
}

const entries = await Promise.all(repos.map(fetchRepo));
const payload = {
  updatedAt: new Date().toISOString(),
  repos: Object.fromEntries(entries.map((entry) => [entry.repo, entry]))
};

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`);

console.log(`Updated GitHub metrics for ${entries.length} repositories.`);
