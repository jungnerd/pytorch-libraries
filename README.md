# PyTorch Libraries

A compact, bilingual index of user-facing libraries maintained under the PyTorch GitHub organization.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000/en` or `http://localhost:3000/ko`.

## GitHub Metrics

The curated library list lives in `data/libraries.ts`. GitHub status badges are generated into `data/github-metrics.json`.

```bash
npm run update:metrics
```

Set `GITHUB_TOKEN` to avoid anonymous GitHub API rate limits.

## Checks

```bash
npm test
npm run build
```
