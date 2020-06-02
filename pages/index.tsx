import React, { ReactElement } from "react";
import Layout from "../components/layout";

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <div>
      <Layout>
        <div></div>
      </Layout>
    </div>
  );
}
