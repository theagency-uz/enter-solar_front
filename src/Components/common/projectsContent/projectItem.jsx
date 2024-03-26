import React from "react";
import { useTranslation } from "@/app/i18n/client";
import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import classes from "./styles.module.css";

function ProjectItem({ lng, project, openImageViewer, index, ...props }) {
  const { t, i18n } = useTranslation(lng);

  return (
    <>
      {project.number ? (
        <li className={classes.projectItemNumber}>
          <Box className={classes.projectImgBox}>
            <Image
              src={project.image}
              width={537}
              height={303}
              alt={"project-image"}
              priority
              className={classes.projectImage}
              onClick={() => openImageViewer(index)}
            />
          </Box>

          <Box className={classes.projectBox}>
            <span className={classes.projectYear}>2023</span>

            <Box className={classes.projectWrapper}>
              <p className={classes.projectText}>
                {t("Произведено \n солнечных панелей за год")}
              </p>
              <span className={classes.border}></span>
              <p className={classes.projectCount}>{t("367 540 шт")}</p>
            </Box>
          </Box>
        </li>
      ) : (
        <li className={classes.projectItem}>
          {project.name && (
            <p className={classes.projectName}>{t(project.name)}</p>
          )}

          <Image
            src={project.image}
            width={537}
            height={303}
            alt={"project-image"}
            priority
            className={classes.projectImage}
            onClick={() => openImageViewer(index)}
          />
        </li>
      )}
    </>
  );
}

export default ProjectItem;
