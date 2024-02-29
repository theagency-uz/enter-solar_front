import Image from "next/image";
import { Box, Button, useMediaQuery } from "@mui/material";
import { useTranslation } from "@/app/i18n/client";
import classes from "./styles.module.css";

function PanelItem({ lng, panel, ...props }) {
  const { t, i18n } = useTranslation(lng);

  return (
    <li className={classes.panelItem}>
      <Box className={classes.panelWrapper}>
        <Box className={classes.panelInner}>
          <h4 className={classes.panelTitle}>{t(panel.title)}</h4>
          <p className={classes.panelDesc}>{t(panel.desc)}</p>
        </Box>

        <div
          dangerouslySetInnerHTML={{
            __html: panel.text,
          }}
          className={classes.panelText}
        ></div>
      </Box>

      <Box className={classes.panelImgBox}>
        <Image
          src={panel.image}
          width={720}
          height={400}
          alt={"panel-img"}
          priority
          className={classes.panelImg}
        />
      </Box>
    </li>
  );
}

export default PanelItem;
