import React from "react";
import Highlighter from "../highlighter/highlighter";

const ListComponents = ({
  code,
  name,
}: {
  code: React.ReactNode;
  name: string;
}) => {
  return (
    <div>
      <Highlighter code={code} language="html" componentName={name} />
    </div>
  );
};

export default ListComponents;
