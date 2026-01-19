"use client";

import AuthModal from "@/components/Modals/AuthModal";
import Modal from "@/components/Modals/Modal";
import { Fragment, useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Fragment>
      <AuthModal />
    </Fragment>
  );
};

export default ModalProvider;
