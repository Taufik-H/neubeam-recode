"use client";
import React, { useEffect } from "react";
import components from "@/constant/components";
import ListComponents from "@/components/sections/list-components";
import { notFound } from "next/navigation";
import Link from "next/link";
import jsonDataDirectory from "@/constant/jsonDataDirectory";
import ReactDOMServer from "react-dom/server";

import { getComponentCode } from "@/utils/getComponentCode";
import dynamic from "next/dynamic";

const Components = ({ params }: { params: { componentName: string } }) => {
  const filteredComponents = components.filter((component) =>
    component.style.some((style) =>
      style.name.toLowerCase().includes(params.componentName.toLowerCase()),
    ),
  );

  if (filteredComponents.length === 0) {
    return notFound();
  }

  const componentsDancok = [];

  if (jsonDataDirectory && Array.isArray(jsonDataDirectory)) {
    const findIndexByName = jsonDataDirectory.findIndex(
      (component) => component.name === params.componentName,
    );
    console.log(findIndexByName);
    console.log(findIndexByName);
    const countComponents = jsonDataDirectory[findIndexByName].allComponents;
    console.log(countComponents);
    for (let i = 0; i < countComponents.length; i++) {
      const file = jsonDataDirectory[findIndexByName].allComponents[i];
      const Component = dynamic(
        () => import(`@/ui/${params.componentName}/${file}`),
        {
          ssr: false,
        },
      );

      componentsDancok.push(
        <ListComponents
          key={`component-${i + 1}`}
          name={file}
          code={<Component />}
        />,
      );
    }
  }

  return <div>{componentsDancok}</div>;
};

export default Components;
