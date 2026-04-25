import { describe, expect, it } from "vitest";
import {
  CATEGORIES,
  SUPPORTED_LOCALES,
  buildCatalog,
  formatRelativeUpdate
} from "../lib/catalog";
import { curatedLibraries } from "../data/libraries";

describe("buildCatalog", () => {
  it("groups non-archived libraries into five ordered categories", () => {
    const catalog = buildCatalog(
      [
        {
          repo: "pytorch/pytorch",
          name: "PyTorch",
          category: "core-domain",
          description: {
            en: "Core tensor and neural network framework.",
            ko: "핵심 텐서 및 신경망 프레임워크입니다."
          }
        },
        {
          repo: "pytorch/ao",
          name: "TorchAO",
          category: "training-optimization",
          description: {
            en: "Quantization and optimization toolkit.",
            ko: "양자화와 최적화 도구 모음입니다."
          }
        },
        {
          repo: "pytorch/old",
          name: "Old Library",
          category: "developer-tools",
          description: {
            en: "Old archived project.",
            ko: "오래된 아카이브 프로젝트입니다."
          }
        }
      ],
      {
        "pytorch/pytorch": {
          repo: "pytorch/pytorch",
          stars: 75000,
          pushedAt: "2026-04-20T00:00:00.000Z",
          archived: false,
          htmlUrl: "https://github.com/pytorch/pytorch"
        },
        "pytorch/ao": {
          repo: "pytorch/ao",
          stars: 3200,
          pushedAt: "2026-04-23T00:00:00.000Z",
          archived: false,
          htmlUrl: "https://github.com/pytorch/ao"
        },
        "pytorch/old": {
          repo: "pytorch/old",
          stars: 10,
          pushedAt: "2020-01-01T00:00:00.000Z",
          archived: true,
          htmlUrl: "https://github.com/pytorch/old"
        }
      },
      "en"
    );

    expect(catalog.map((section) => section.id)).toEqual(CATEGORIES.map((category) => category.id));
    expect(catalog.flatMap((section) => section.libraries.map((library) => library.name))).toEqual([
      "PyTorch",
      "TorchAO"
    ]);
  });

  it("uses localized copy and falls back to GitHub URLs when metrics are missing", () => {
    const catalog = buildCatalog(
      [
        {
          repo: "pytorch/executorch",
          name: "ExecuTorch",
          category: "deployment-inference",
          description: {
            en: "On-device AI runtime.",
            ko: "온디바이스 AI 런타임입니다."
          }
        }
      ],
      {},
      "ko"
    );

    expect(catalog[2].libraries[0]).toMatchObject({
      description: "온디바이스 AI 런타임입니다.",
      href: "https://github.com/pytorch/executorch",
      starsLabel: null
    });
  });
});

describe("curatedLibraries", () => {
  it("keeps Korean descriptions action-oriented instead of repeating type labels", () => {
    const repeatedTypeLabels = curatedLibraries
      .map((library) => library.description.ko)
      .filter((description) =>
        /(라이브러리|프레임워크|도구|스택|런타임|통합|컨테이너|프로파일러|벤치마크)입니다\.$/.test(
          description
        )
      );

    expect(repeatedTypeLabels).toEqual([]);
  });
});

describe("formatRelativeUpdate", () => {
  it("formats same-day GitHub push timestamps in hours", () => {
    const now = new Date("2026-04-25T10:00:00.000Z");

    expect(formatRelativeUpdate("2026-04-25T09:30:00.000Z", "en", now)).toBe("Updated <1h ago");
    expect(formatRelativeUpdate("2026-04-25T07:00:00.000Z", "ko", now)).toBe("3시간 전 업데이트");
  });

  it("formats older GitHub push timestamps for English and Korean", () => {
    const now = new Date("2026-04-25T00:00:00.000Z");

    expect(formatRelativeUpdate("2026-04-24T00:00:00.000Z", "en", now)).toBe("Updated 1d ago");
    expect(formatRelativeUpdate("2026-04-22T00:00:00.000Z", "ko", now)).toBe("3일 전 업데이트");
  });
});

describe("SUPPORTED_LOCALES", () => {
  it("supports English and Korean routes", () => {
    expect(SUPPORTED_LOCALES).toEqual(["en", "ko"]);
  });
});
