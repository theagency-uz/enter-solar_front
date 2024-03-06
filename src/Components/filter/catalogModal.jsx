"use client";
import { useTranslation } from "@/app/i18n/client";
import {
  Box,
  Modal,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Fade,
} from "@mui/material";
import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";

function CatalogModal({ lng, handleClose, setOpen, open, Icon, ...props }) {
  const { t } = useTranslation(lng);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ overflow: "scroll", zIndex: 10 }}
    >
      <Fade in={open}>
        <Box className={classes.filterModal}>
          <Box className={classes.filterWrapper}>
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
            <Button onClick={handleClose} sx={{ minWidth: "auto" }}>
              <Image
                src={"/icons/close-icon.svg"}
                width={18}
                height={18}
                alt={"close-icon"}
                className={classes.filterIcon}
              />
            </Button>
          </Box>

          <form
            className={classes.filterForm}
            // onSubmit={async (e) => {
            //   formik.handleSubmit(e);
            // }}
          >
            <Box className={classes.filterBox}>
              <h4 className={classes.filterName}>{t("Тип")}</h4>
              <ToggleButtonGroup
                exclusive
                // value={brand}
                // onChange={async (e, newValue) => {
                //   await setBrand(newValue);
                //   setPage(1);
                // }}
                aria-label="brand"
                className={classes.filterBtnGroup}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  alignItems: "flex-start",
                  borderRadius: "0",
                }}
              >
                <ToggleButton
                  // value={b.name}
                  // key={b.id}
                  aria-label="bold"
                  disableRipple={true}
                  sx={{
                    fontFamily: "Stapel",
                    fontWeight: 300,
                    fontSize: "14px",
                    lineHeight: "100%",
                    color: "#000",
                    fontStyle: "normal",
                    textTransform: "none",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: 0,
                    padding: 0,
                    margin: "0",
                    "&.Mui-selected": {
                      backgroundColor: "transparent",

                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    },
                    "&:hover": { background: "none" },
                  }}
                >
                  <Icon selected={false} />
                  {t("Односторонние")}
                </ToggleButton>
                <ToggleButton
                  // value={b.name}
                  // key={b.id}
                  aria-label="bold"
                  disableRipple={true}
                  sx={{
                    fontFamily: "Stapel",
                    fontWeight: 300,
                    fontSize: "14px",
                    lineHeight: "100%",
                    color: "#000",
                    fontStyle: "normal",
                    textTransform: "none",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: 0,
                    padding: 0,
                    margin: "0",
                    "&.Mui-selected": {
                      backgroundColor: "transparent",

                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    },
                    "&:hover": { background: "none" },
                  }}
                >
                  <Icon selected={true} />
                  {t("Двусторонние")}
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Box className={classes.filterBox}>
              <h4 className={classes.filterName}>{t("Бренд")}</h4>
              <ToggleButtonGroup
                exclusive
                // value={brand}
                // onChange={async (e, newValue) => {
                //   await setBrand(newValue);
                //   setPage(1);
                // }}
                aria-label="brand"
                className={classes.filterBtnGroup}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  alignItems: "flex-start",
                  borderRadius: "0",
                }}
              >
                <ToggleButton
                  // value={b.name}
                  // key={b.id}
                  aria-label="bold"
                  disableRipple={true}
                  sx={{
                    fontFamily: "Stapel",
                    fontWeight: 300,
                    fontSize: "14px",
                    lineHeight: "100%",
                    color: "#000",
                    fontStyle: "normal",
                    textTransform: "none",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: 0,
                    padding: 0,
                    margin: "0",
                    "&.Mui-selected": {
                      backgroundColor: "transparent",

                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    },
                    "&:hover": { background: "none" },
                  }}
                >
                  <Icon selected={true} />
                  Enter Solar
                </ToggleButton>
                <ToggleButton
                  // value={b.name}
                  // key={b.id}
                  aria-label="bold"
                  disableRipple={true}
                  sx={{
                    fontFamily: "Stapel",
                    fontWeight: 300,
                    fontSize: "14px",
                    lineHeight: "100%",
                    color: "#000",
                    fontStyle: "normal",
                    textTransform: "none",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: 0,
                    padding: 0,
                    margin: "0",
                    "&.Mui-selected": {
                      backgroundColor: "transparent",

                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    },
                    "&:hover": { background: "none" },
                  }}
                >
                  <Icon />
                  Jinko
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Button
              variant="contained"
              type="submit"
              className={classes.filterModalBtn}
            >
              {t("Показать")}
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
}

export default CatalogModal;
