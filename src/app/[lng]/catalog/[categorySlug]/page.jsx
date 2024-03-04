import React from "react";
import PageWrapper from "./pageWrapper";

function Catalog({ params: { lng }, ...props }) {
  return <PageWrapper lng={lng} />;
}

export default Catalog;
