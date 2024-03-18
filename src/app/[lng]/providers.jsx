"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarContext from "@/context/sidebar.context";
import FormContext from "@/context/form.context";
import FormBar from "@/layout/formBar";
import Loading from "@/Components/common/loading";
import Notificationcontext from "@/context/notification.context";
import NextTopLoader from "nextjs-toploader";
import Notification from "@/Components/common/form/notification";

export default function Providers({ lng, children }) {
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(false);
  const [open, setOpen] = useState(false);
  const sidebarValue = { open, setOpen };
  const formValue = { form, setForm };
  const [notify, setNotify] = useState({ open: false, text: "" });
  const notifyValue = { notify, setNotify };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={loading}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {loading ? (
            <Loading />
          ) : (
            <Notificationcontext.Provider value={notifyValue}>
              <FormContext.Provider value={formValue}>
                <SidebarContext.Provider value={sidebarValue}>
                  <NextTopLoader color="#fff" showSpinner={false} />
                  <Notification
                    handleClose={() =>
                      setNotify((n) => {
                        return { ...n, open: false };
                      })
                    }
                    open={notify.open}
                    text={notify.text}
                  />
                  <FormBar form={form} setForm={setForm} lng={lng} />
                  {children}
                </SidebarContext.Provider>
              </FormContext.Provider>
            </Notificationcontext.Provider>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
