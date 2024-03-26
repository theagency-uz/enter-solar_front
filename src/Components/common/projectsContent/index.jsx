"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, useMediaQuery } from "@mui/material";
import React, { useCallback, useState } from "react";
import classes from "./styles.module.css";
import Container from "@/Container/Container";
import projectsData from "@/data/projectsData";
import ProjectItem from "./projectItem";
import ModalContent from "./modalContent";
import ProjectImageViewer from "./projectImageViewer";

function ProjectsContent({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);
  const [projectContent, setProjectContent] = useState(projectsData);

  const [currentImage, setCurrentImage] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <Box className={classes.project}>
      <Container>
        <h3 className={classes.projectTitle}>{t("Проекты Enter Solar")}</h3>

        <ul className={classes.projectList}>
          {projectContent.map((project, index) => {
            return (
              <ProjectItem
                project={project}
                openImageViewer={openImageViewer}
                index={index}
                lng={lng}
                key={project.id}
              />
            );
          })}
        </ul>
        <ModalContent open={isViewerOpen} setOpen={setIsViewerOpen}>
          <ProjectImageViewer
            images={projectContent}
            currentImage={currentImage}
            closeImageViewer={closeImageViewer}
          />
        </ModalContent>
      </Container>
    </Box>
  );
}

export default ProjectsContent;
