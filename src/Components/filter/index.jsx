"use client";
import { Box, Button, useMediaQuery } from "@mui/material";
import CatalogFilter from "./catalogFilter";
import Image from "next/image";
import classes from "./styles.module.css";
import { useTranslation } from "@/app/i18n/client";
import { useState } from "react";
import CatalogModal from "./catalogModal";

const Icon = ({ selected }) => {
  return (
    <div
      style={{
        borderRadius: "6px",
        width: "18px",
        height: "18px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid #A6A6A6",
      }}
    >
      <span
        style={{
          borderRadius: "3px",
          width: "10px",
          height: "10px",
          background: "#A6A6A6",
          transform: `scale(${selected ? 1 : 0})`,
          transition: "0.5s",
        }}
      ></span>
    </div>
  );
};


function Filter({ lng, ...props }) {
  const { t } = useTranslation(lng);
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (mdUp) {
    return (
      <Box className={classes.filter}>
        <Box className={classes.filterTitle}>
          <Image
            src={"/icons/filter.svg"}
            width={18}
            height={18}
            alt={"filter-icon"}
            className={classes.filterIcon}
          />
          {t("Фильтры")}
        </Box>

        <CatalogFilter lng={lng} Icon={Icon} />
      </Box>
    );
  }
  return (
    <Box className={classes.filter}>
      <Button onClick={handleOpen} className={classes.filterTitleBtn}>
        <Image
          src={"/icons/filter.svg"}
          width={18}
          height={18}
          alt={"filter-icon"}
          className={classes.filterIcon}
        />
        {t("Фильтры")}
      </Button>

      <CatalogModal
        lng={lng}
        setOpen={setOpen}
        open={open}
        handleClose={handleClose}
        Icon={Icon}
      />
    </Box>
  );
}

export default Filter;
