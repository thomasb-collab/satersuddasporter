import { useEffect, useRef } from "react";

const FACEBOOK_PAGE_URL = "https://www.facebook.com/Satersuddasporter";

declare global {
  interface Window {
    FB?: {
      XFBML: { parse: (node?: HTMLElement) => void };
      init: (options: Record<string, unknown>) => void;
    };
  }
}

const loadFacebookSdk = () =>
  new Promise<void>((resolve) => {
    if (window.FB) {
      resolve();
      return;
    }

    if (!document.getElementById("fb-root")) {
      const fbRoot = document.createElement("div");
      fbRoot.id = "fb-root";
      document.body.prepend(fbRoot);
    }

    const existingScript = document.getElementById(
      "facebook-jssdk"
    ) as HTMLScriptElement | null;

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve());
      return;
    }

    const script = document.createElement("script");
    script.id = "facebook-jssdk";
    script.src = "https://connect.facebook.net/sv_SE/sdk.js#xfbml=1&version=v21.0";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    script.onload = () => resolve();
    document.body.appendChild(script);
  });

const FacebookFeed = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    loadFacebookSdk().then(() => {
      if (cancelled) return;
      window.FB?.XFBML.parse(containerRef.current ?? undefined);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      id="nyheter"
      className="bg-background relative scroll-mt-12"
      style={{ padding: "clamp(4rem, 8vw, 8rem) 0" }}
    >
      <div
        className="max-w-2xl mx-auto"
        style={{ padding: "0 clamp(1.5rem, 5vw, 5rem)" }}
      >
        <p className="label-text">Aktuellt</p>
        <h2 className="section-title mb-10">Nyheter</h2>

        <div
          ref={containerRef}
          className="rounded-lg overflow-hidden border border-border flex justify-center bg-card"
        >
          <div
            className="fb-page"
            data-href={FACEBOOK_PAGE_URL}
            data-tabs="timeline"
            data-width=""
            data-height="700"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote cite={FACEBOOK_PAGE_URL} className="fb-xfbml-parse-ignore">
              <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noreferrer">
                Säters Udda Sporter på Facebook
              </a>
            </blockquote>
          </div>
        </div>

        <a
          href={FACEBOOK_PAGE_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-4 text-xs tracking-widest uppercase"
          style={{ color: "hsl(var(--yellow))" }}
        >
          Se fler inlägg på Facebook →
        </a>
      </div>
    </section>
  );
};

export default FacebookFeed;
