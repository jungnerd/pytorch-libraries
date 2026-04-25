export const SUPPORTED_LOCALES = ["en", "ko"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const CATEGORIES = [
  { id: "core-domain", title: { en: "Core & Domain Libraries", ko: "코어 및 도메인 라이브러리" } },
  { id: "training-optimization", title: { en: "Training & Optimization", ko: "학습 및 최적화" } },
  { id: "deployment-inference", title: { en: "Deployment & Inference", ko: "배포 및 추론" } },
  { id: "applied-ml", title: { en: "Applied ML Libraries", ko: "응용 ML 라이브러리" } },
  { id: "developer-tools", title: { en: "Developer Tools & Performance", ko: "개발 도구 및 성능" } }
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

export interface CuratedLibrary {
  repo: string;
  name: string;
  category: CategoryId;
  description: Record<Locale, string>;
}

export interface GithubMetric {
  repo: string;
  stars: number;
  pushedAt: string;
  archived: boolean;
  htmlUrl: string;
}

export type GithubMetrics = Record<string, GithubMetric>;

export interface CatalogLibrary {
  repo: string;
  name: string;
  description: string;
  href: string;
  starsLabel: string | null;
  updatedLabel: string | null;
}

export interface CatalogSection {
  id: CategoryId;
  title: string;
  libraries: CatalogLibrary[];
}

export function buildCatalog(
  libraries: CuratedLibrary[],
  metrics: GithubMetrics,
  locale: Locale,
  now = new Date()
): CatalogSection[] {
  return CATEGORIES.map((category) => ({
    id: category.id,
    title: category.title[locale],
    libraries: libraries
      .filter((library) => library.category === category.id)
      .filter((library) => !metrics[library.repo]?.archived)
      .map((library) => {
        const metric = metrics[library.repo];

        return {
          repo: library.repo,
          name: library.name,
          description: library.description[locale],
          href: metric?.htmlUrl ?? `https://github.com/${library.repo}`,
          starsLabel: typeof metric?.stars === "number" ? formatStars(metric.stars) : null,
          updatedLabel: metric?.pushedAt ? formatRelativeUpdate(metric.pushedAt, locale, now) : null
        };
      })
  }));
}

export function formatRelativeUpdate(pushedAt: string, locale: Locale, now = new Date()) {
  const pushed = new Date(pushedAt);
  const diffMs = Math.max(0, now.getTime() - pushed.getTime());
  const diffHours = Math.floor(diffMs / 3_600_000);

  if (diffHours < 1) {
    return locale === "ko" ? "1시간 이내 업데이트" : "Updated <1h ago";
  }

  if (diffHours < 24) {
    return locale === "ko" ? `${diffHours}시간 전 업데이트` : `Updated ${diffHours}h ago`;
  }

  const diffDays = Math.floor(diffMs / 86_400_000);

  if (diffDays < 30) {
    return locale === "ko" ? `${diffDays}일 전 업데이트` : `Updated ${diffDays}d ago`;
  }

  const diffMonths = Math.max(1, Math.floor(diffDays / 30));

  if (diffMonths < 12) {
    return locale === "ko" ? `${diffMonths}개월 전 업데이트` : `Updated ${diffMonths}mo ago`;
  }

  const diffYears = Math.max(1, Math.floor(diffMonths / 12));
  return locale === "ko" ? `${diffYears}년 전 업데이트` : `Updated ${diffYears}y ago`;
}

function formatStars(stars: number) {
  if (stars >= 1000) {
    return `★ ${(stars / 1000).toFixed(stars >= 10000 ? 0 : 1)}k`;
  }

  return `★ ${stars}`;
}
