import { ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import metricsData from "../../data/github-metrics.json";
import { curatedLibraries } from "../../data/libraries";
import { SUPPORTED_LOCALES, buildCatalog, type GithubMetrics, type Locale } from "../../lib/catalog";

const copy = {
  en: {
    eyebrow: "PyTorch GitHub Organization",
    title: "PyTorch Libraries",
    description: "A curated map of PyTorch libraries maintained under the PyTorch GitHub organization.",
    synced: "Last synced from GitHub",
    pending: "Metrics pending",
    noLibraries: "No libraries in this category yet."
  },
  ko: {
    eyebrow: "PyTorch GitHub 조직",
    title: "PyTorch Libraries",
    description: "PyTorch GitHub 조직에서 관리되는 주요 라이브러리를 한곳에 모은 안내 페이지입니다.",
    synced: "GitHub 기준 마지막 갱신",
    pending: "지표 갱신 대기 중",
    noLibraries: "아직 이 카테고리에 표시할 라이브러리가 없습니다."
  }
} satisfies Record<Locale, Record<string, string>>;

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function LocalePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;

  if (!SUPPORTED_LOCALES.includes(rawLocale as Locale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const catalog = buildCatalog(curatedLibraries, metricsData.repos as GithubMetrics, locale);
  const text = copy[locale];
  const syncedAt = formatSyncedAt(metricsData.updatedAt, locale);

  return (
    <main>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href={`/${locale}`} aria-label="PyTorch Libraries home">
            <img className="brand-logo" src="/pytorch-logo.svg" alt="PyTorch" width="122" height="30" />
            <span className="brand-divider" aria-hidden="true" />
            <span>Libraries</span>
          </a>
          <nav className="language-switch" aria-label="Language">
            <a className={locale === "en" ? "active" : ""} href="/en">
              EN
            </a>
            <span aria-hidden="true">/</span>
            <a className={locale === "ko" ? "active" : ""} href="/ko">
              KO
            </a>
          </nav>
        </div>
      </header>

      <div className="intro-band">
        <section className="page-shell intro" aria-labelledby="page-title">
          <p className="eyebrow">{text.eyebrow}</p>
          <h1 id="page-title">{text.title}</h1>
          <p className="description">{text.description}</p>
          <p className="sync-line">
            {text.synced} · {syncedAt ?? text.pending}
          </p>
        </section>
      </div>

      <div className="content-band">
        <div className="page-shell sections">
          {catalog.map((section) => (
            <section className="library-section" key={section.id} aria-labelledby={section.id}>
              <div className="section-heading">
                <h2 id={section.id}>{section.title}</h2>
                <small>{section.libraries.length}</small>
                <span aria-hidden="true" />
              </div>

              {section.libraries.length > 0 ? (
                <div className="library-grid">
                  {section.libraries.map((library) => (
                    <a className="library-card" href={library.href} key={library.repo}>
                      <div className="card-head">
                        <h3>{library.name}</h3>
                        <ExternalLink aria-hidden="true" size={17} strokeWidth={1.8} />
                      </div>
                      <p>{library.description}</p>
                      <div className="badges" aria-label={`${library.name} GitHub status`}>
                        {library.starsLabel ? <span>{library.starsLabel}</span> : null}
                        {library.updatedLabel ? <span>{library.updatedLabel}</span> : null}
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="empty-state">{text.noLibraries}</p>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

function formatSyncedAt(value: string | null, locale: Locale) {
  if (!value) {
    return null;
  }

  return new Intl.DateTimeFormat(locale === "ko" ? "ko-KR" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date(value));
}
