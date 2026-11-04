import { GoogleTagManager } from "@next/third-parties/google";

import { SITE_CONFIG } from "@/lib/constants";

const GTM_ID_PATTERN = /^GTM-[A-Z0-9]+$/;

function resolveGtmId() {
  const fromEnv = process.env.NEXT_PUBLIC_GTM_ID?.trim();
  const gtmId = fromEnv || SITE_CONFIG.gtmId;
  return GTM_ID_PATTERN.test(gtmId) ? gtmId : null;
}

export function Analytics() {
  const gtmId = resolveGtmId();
  if (!gtmId) return null;

  return (
    <>
      <GoogleTagManager gtmId={gtmId} />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
        />
      </noscript>
    </>
  );
}
