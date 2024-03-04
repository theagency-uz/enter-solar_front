"use client";
import { Box } from "@mui/material";

import classes from "./styles.module.css";
import Sidebar from "../sidebar";
import { useTranslation } from "@/app/i18n/client";
import FormWrapper from "@/Components/common/formWrapper";
import Image from "next/image";

function FormBar({ lng, form, setForm, ...props }) {
  const { t, i18n } = useTranslation(lng);

  return (
    <Sidebar
      open={form.open}
      setOpen={(v) => setForm({ open: v })}
      isForm={true}
    >
      <Box className={classes.wrapper}>
        <FormWrapper lng={lng} />

        <Image
          src={"/static/site/enter-solar-text-mobi.svg"}
          width={1120}
          height={106}
          alt={"image"}
          priority
          className={classes.image}
        />
      </Box>
    </Sidebar>
  );
}

export default FormBar;
