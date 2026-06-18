"use client";

import { QRCodeSVG } from "qrcode.react";

type QRCodeDownloadProps = {
  value: string;
  label: string;
};

export function QRCodeDownload({ value, label }: QRCodeDownloadProps) {
  return (
    <div className="inline-flex flex-col items-center rounded-2xl border border-carlo-gold/25 bg-cream-50/5 p-4">
      <QRCodeSVG
        value={value}
        size={156}
        fgColor="#FBF8F3"
        bgColor="transparent"
        level="H"
        includeMargin={false}
      />
      <p className="mt-4 font-sans text-xs uppercase tracking-[0.18em] text-cream-50/65">
        {label}
      </p>
    </div>
  );
}
