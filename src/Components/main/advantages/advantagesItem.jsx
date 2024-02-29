import Image from "next/image";
import { Box, Button, useMediaQuery } from "@mui/material";
import { useTranslation } from "@/app/i18n/client";
import classes from "./styles.module.css";

function AdvantagesItem({ lng, advantages, ...props }) {
  const { t, i18n } = useTranslation(lng);

  return (
    <li className={classes.advantagesItem}>
      <Box className={classes.advantagesImgBox}>
        <Image
          src={advantages.image}
          width={527}
          height={216}
          alt={"image"}
          priority
          className={classes.advantagesImg}
        />
      </Box>

      <Box className={classes.advantagesWrapper}>
        <h4 className={classes.advantagesDesc}>{t(advantages.title)}</h4>
        <p className={classes.advantagesText}>{t(advantages.text)}</p>
      </Box>
    </li>
  );
}

export default AdvantagesItem;
