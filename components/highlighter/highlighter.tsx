import React, { Suspense, useEffect, useState } from "react";

import ButtonHighliter from "./button-highlighter";

import "@/app/customprism.css";
import { IframeComp } from "../Iframe";

interface HighlighterProps {
  language?: string;
  componentName?: string;
  code: React.ReactNode;
}

type SizeKey = "mobile" | "sm" | "md" | "lg" | "full";

const Highlighter = ({ language, componentName, code }: HighlighterProps) => {
  const [showPreview, setShowPreview] = useState(true);
  const [iframeWidth, setIframeWidth] = useState("100%");
  const [loading, setLoading] = useState(true);

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  const handleIframeWidthChange = (size: SizeKey) => {
    const sizes = {
      mobile: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      full: "100%",
    };
    setIframeWidth(sizes[size] || "100%");
  };

  return (
    <div>
      <div className="p-4">
        <h1 className="mb-4 text-2xl font-bold">
          {componentName ? componentName : "Component Name"}
        </h1>
        <div className="flex justify-between ">
          <div className="flex gap-2 ">
            <ButtonHighliter
              mode="preview"
              onToggle={togglePreview}
              isPreviewing={showPreview}
            />
            {/* <ButtonHighliter mode="copy" code={code} /> */}
          </div>
          <ButtonHighliter
            mode="responsiveness"
            onSizeChange={handleIframeWidthChange}
          />
        </div>
        <div
          style={{ transition: "width 0.5s ease-in-out", width: iframeWidth }}
        >
          <div>
            {showPreview ? (
              <div className="mt-10 h-[70vh] overflow-hidden rounded-xl border-2 border-b-4 border-r-4 border-slate-800 bg-sky-500 ">
                <IframeComp scripts={["https://cdn.tailwindcss.com"]}>
                  <div className="flex w-full justify-center ">{code}</div>
                </IframeComp>
              </div>
            ) : (
              <div className="mt-10">
                <pre
                  className={`language-${language} h-[70vh] max-h-[70vh] overflow-scroll rounded-xl border-2 border-b-4 border-r-4 border-slate-800`}
                >
                  {/* <code className={`language-${language}`}>{`${code}`}</code> */}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlighter;
