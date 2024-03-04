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
// import { sendForm } from "@/services/application";
import Image from "next/image";
import PhoneNumber from "./phoneNumber";

function Form({ lng, ...props }) {
  const { t, i18n } = useTranslation(lng);
  const { notify, setNotify } = useContext(Notificationcontext);
  const [loadng, setLoading] = useState(false);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const smUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

    return phoneNumberPattern.test(phoneNumber);
  };

  // const SERVICES = ['sell', 'buy', 'price', 'moshennik'];

  // const formik = useFormik({
  //   initialValues: {
  //     name: '',
  //     phone: '',
  //     services: [],
  //   },
  //   validationSchema: Yup.object({
  //     name: Yup.string().max(255).required(t('Имя обязательное поле')),
  //     phone: Yup.string().required(t('Номер обязательное поле')),
  //     services: Yup.array().of(Yup.string().oneOf(SERVICES)),
  //   }),

  //   onSubmit: async ({ name, phone, services }) => {
  //     try {
  //       setLoading(true);

  //       const result = await sendForm({
  //         name,
  //         phone,
  //         services,
  //       });

  //       if (typeof ym === 'function') {
  //         ym(95774498, 'reachGoal', 'form_send');
  //       }
  //       // if (
  //       //   typeof dataLayer !== "undefined" &&
  //       //   typeof dataLayer.push === "function"
  //       // ) {
  //       //   dataLayer.push({ event: "form_send" });
  //       // }

  //       // if (typeof fbq === "function") {
  //       //   fbq("trackCustom", "form_send");
  //       // }

  //       setLoading(false);
  //       setNotify({
  //         open: true,
  //         text: t('Спасибо, данные успешно отправлены'),
  //       });
  //       formik.resetForm();
  //     } catch (err) {
  //       console.log('form error: ', err);
  //       setLoading(false);
  //       setNotify({
  //         open: false,
  //         text: '',
  //       });
  //     }
  //   },
  // });

  return (
    <form className={classes.form} {...props}>
      <div className={classes.formInputBox}>
        <LabelInput
          label={t("Ваше имя")}
          name="name"
          // placeholder={t("Ваше имя")}
          // value={formik.values.name}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // error={Boolean(formik.touched.name && formik.errors.name)}
          // helperText={formik.touched.name && formik.errors.name}
        />
        <LabelInput
          label={t("Email")}
          name="email"
          // placeholder={t("Email")}
          // value={formik.values.email}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // error={Boolean(formik.touched.email && formik.errors.email)}
          // helperText={formik.touched.email && formik.errors.email}
        />
        <PhoneNumber
          // label={t("Ваш телефон")}
          phoneNumber={phoneNumber}
          handleChange={handleChange}
          valid={valid}
        />
        {/* <LabelInput
          label={t('Ваш телефон')}
          name='phone'
          // value={formik.values.phone}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // error={Boolean(formik.touched.phone && formik.errors.phone)}
          // helperText={formik.touched.phone && formik.errors.phone}
        /> */}
      </div>

      {/* <AccordionContent lng={lng} /> */}

      <Box className={classes.comment}>
        <LabelInput
          label={t("Ваш запрос")}
          name="comment"
          // value={formik.values.info}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          type="textarea"
          // placeholder={t("Комментарий (по желанию)")}
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
