import React, { ReactElement } from "react";

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <div>
      <button className="bg-blue-500 py-2 rounded-md text-white px-4">
        Click Me!
      </button>
    </div>
  );
}
