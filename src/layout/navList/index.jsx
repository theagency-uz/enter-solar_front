"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Box, Button, useMediaQuery } from "@mui/material";
import { useTranslation } from "@/app/i18n/client";
import { useEffect, useRef, useState } from "react";
import classes from "./styles.module.css";

function useOutsideAlerter(ref, fn) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      let check = false;

      for (let i = 0; i < ref.length; i++) {
        if (ref[i].current && !ref[i].current.contains(event.target)) {
          check = true;
        } else {
          check = false;
          break;
        }
      }
      if (check) {
        fn(event);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, fn]);
}

function NavList({ lng, setOpen, scrollFired, ...props }) {
  const { t } = useTranslation(lng);
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const [categoryOpen, setCategoryOpen] = useState(true);
  const categoriesRef = useRef(null);
  const categoriesButtonRef = useRef(null);

  const categories = [
    {
      id: 1,
      name: t("ФЭМ  >"),
    },
    {
      id: 2,
      name: t("ФЭС  >"),
    },
    {
      id: 3,
      name: t("Комплектующие  >"),
    },
  ];

  useEffect(() => {
    setCategoryOpen(false);
  }, []);

  useOutsideAlerter([categoriesRef, categoriesButtonRef], (e) => {
    setCategoryOpen(false);
  });

  return (
    <ul className={classes.navList}>
      <li className={classes.navItem}>
        <Button
          ref={categoriesButtonRef}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setCategoryOpen((c) => !c);
          }}
        >
          {t("Каталог")}
        </Button>
        {mdUp ? (
          <AnimatePresence mode="wait">
            <motion.div
              // style={{ background: scrollFired ? "#fff" : "transparent" }}
              ref={categoriesRef}
              initial={{
                // height: "60px",
                top: mdUp ? "54px" : "0",
                overflow: "hidden",
              }}
              animate={categoryOpen ? "open" : "close"}
              transition={{ duration: 0.3 }}
              variants={{
                open: {
                  zIndex: -1,
                  top: mdUp ? "54px" : "0",
                  height: "auto",
                  width: mdUp ? "160px" : "100%",
                  transition: { duration: 0.3 },
                },
                close: {
                  zIndex: -1,
                  height: "0",
                  top: mdUp ? "54px" : "0",
                  width: mdUp ? "160px" : "100%",
                  transition: { duration: 0.3 },
                },
              }}
              className={classes.catalogDropdown}
            >
              {categories?.map((category) => {
                return (
                  <Link
                    key={category.id}
                    onClick={() => setCategoryOpen((c) => !c)}
                    // href={`/catalog?category=${category.id}`}
                    href={`/catalog/category`}
                    passHref
                    className={classes.categoryName}
                  >
                    {t(category.name)}
                  </Link>
                );
              })}
            </motion.div>
          </AnimatePresence>
        ) : (
          <Box className={classes.categoryBox}>
            {categories?.map((category) => {
              return (
                <Link
                  key={category.id}
                  onClick={(e) => {
                    setOpen(false);
                  }}
                  // href={`/catalog?category=${category.id}`}
                  href={`/catalog/category`}
                  passHref
                  className={classes.categoryName}
                >
                  {t(category.name)}
                </Link>
              );
            })}
          </Box>
        )}
      </li>

      <li className={classes.navItem}>
        <Link
          href={"/business"}
          onClick={(e) => {
            setOpen(false);
          }}
        >
          {t("Для бизнеса")}
        </Link>
      </li>
      <li className={classes.navItem}>
        <Link
          href={"/articles"}
          onClick={(e) => {
            setOpen(false);
          }}
        >
          {t("Статьи")}
        </Link>
      </li>
      <li className={classes.navItem}>
        <Link
          href={"/contacts"}
          onClick={(e) => {
            setOpen(false);
          }}
        >
          {t("Контакты")}
        </Link>
      </li>
    </ul>
  );
}

export default NavList;
