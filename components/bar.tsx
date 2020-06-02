import React, { ReactElement } from "react";

interface Props {}

export default function Bar({}: Props): ReactElement {
  return (
    <div>
      <div className="bg-blue-400 p-1"></div>
    </div>
  );
}
