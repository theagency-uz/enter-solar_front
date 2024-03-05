"use client";
import { useMediaQuery } from "@mui/material";
import ProductTabsPanel from "./productTabPanel";
import ProductAccordion from "./productAccordion";

function ProductTabs({ lng, product, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));

  if (mdUp) {
    return <ProductTabsPanel lng={lng} product={product} />;
  }
  return <ProductAccordion lng={lng} product={product} />;
}

export default ProductTabs;
