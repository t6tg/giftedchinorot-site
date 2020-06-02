import React, { ReactElement } from "react";
import Bar from "./bar";
import Navigation from "./navigation";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <div>
      <Bar />
      <Navigation />
      {children}
    </div>
  );
}
