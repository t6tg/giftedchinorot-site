import React, { ReactElement } from "react";
import Bar from "./bar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <div>
      <Bar />
      {children}
    </div>
  );
}
