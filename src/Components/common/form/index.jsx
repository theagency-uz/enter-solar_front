import { useTranslation } from "@/app/i18n/client";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  useMediaQuery,
} from "@mui/material";
import React, { useContext, useState } from "react";
import LabelInput from "./LabelInput";
import Notificationcontext from "@/context/notification.context";
import { useFormik } from "formik";
import * as Yup from "yup";
import classes from "./styles.module.css";
import { postApplication } from "@/services/application";
import PhoneNumber from "./phoneNumber";
import FormContext from "@/context/form.context";

function Form({ lng, ...props }) {
  const { t, i18n } = useTranslation(lng);
  const { form, setForm } = useContext(FormContext);
  const { notify, setNotify } = useContext(Notificationcontext);
  const [loadng, setLoading] = useState(false);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const smUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      request: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(255).required(t("Имя обязательное поле")),
      phone: Yup.string().required(t("Номер обязательное поле")),
      email: Yup.string()
        .email(t("Введите в правильном формате"))
        .required(t("Email обязательное поле")),
      request: Yup.string(),
    }),

    validateOnChange: ({}) => {},

    onSubmit: async ({ name, phone, email, request }) => {
      try {
        setLoading(true);

        // const result = await postApplication({
        //   name,
        //   phone,
        //   email,
        //   request,
        //   lng: lng,
        //   url: window.location.href,
        // });

        setLoading(false);
        // if (result.error) {
        //   return;
        // }

        // if (typeof ym === 'function') {
        //   ym(95774498, 'reachGoal', 'form_send');
        // }
        // if (
        //   typeof dataLayer !== "undefined" &&
        //   typeof dataLayer.push === "function"
        // ) {
        //   dataLayer.push({ event: "form_send" });
        // }

        // if (typeof fbq === "function") {
        //   fbq("trackCustom", "form_send");
        // }

        setForm({ open: false });
        setNotify({
          open: true,
          text: t("Спасибо, данные успешно отправлены"),
        });
        formik.resetForm();
      } catch (err) {
        console.log("form error: ", err);
        setLoading(false);
        setNotify({
          open: false,
          text: "",
        });
      }
    },
  });

  return (
    <form className={classes.form} onSubmit={formik.handleSubmit} {...props}>
      <div className={classes.formInputBox}>
        <LabelInput
          label={t("Ваше имя")}
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.name && formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <LabelInput
          label={t("Email")}
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.email && formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <PhoneNumber
          value={formik.values.phone}
          formik={formik}
          name="phone"
          helperText={formik.touched.phone && formik.errors.phone}
        />
      </div>

      {/* <AccordionContent lng={lng} /> */}

      <Box className={classes.comment}>
        <LabelInput
          label={t("Ваш запрос")}
          name="request"
          value={formik.values.info}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="textarea"
        />
      </Box>
      <Button className={classes.submit} disableRipple={true} type="submit">
        {t("Отправить")}
        {/* {loading && (
          <span style={{ transform: "skew(25deg)" }}>
            <CircularProgress size={20} />
          </span>
        )} */}
      </Button>
    </form>
  );
}

export default Form;
