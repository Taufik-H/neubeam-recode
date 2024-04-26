"use client";
import "@/app/globals.css";
import React, { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface IFrameProps {
  children: React.ReactNode;
  scripts?: string[] | undefined;
  title?: string;
  className?: any;
}

export const IframeComp: FC<IFrameProps> = ({
  children,
  className,
  title,
  scripts,
  ...props
}) => {
  const [contentRef, setContentRef] = useState<any>(null);
  const mountNode = contentRef?.contentWindow?.document.body;
  useEffect(() => {
    // Memasang skrip ke dalam iframe setelah komponen dimuat
    if (mountNode && scripts.length > 0) {
      scripts.forEach((scriptUrl) => {
        const script = document.createElement("script");
        script.src = scriptUrl;
        script.async = true;
        mountNode.appendChild(script);
      });
    }
  }, [mountNode, scripts]);
  return (
    <iframe
      width={"100%"}
      title={title}
      {...props}
      height={`100%`}
      className={className}
      ref={setContentRef}
    >
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
};
