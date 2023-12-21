"use client";
import { Sandpack } from "@codesandbox/sandpack-react";
import { levelUp } from "@codesandbox/sandpack-themes";

import React from "react";

function CodeSandbox({ files, template = "vite-vue" }) {
  return <Sandpack template="vite-vue" theme={levelUp} files={files} />;
}

export default CodeSandbox;
