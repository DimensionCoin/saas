"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("77ded556-5b4a-4c88-973a-2e111d50c5d4");
  }, []);

  return null;
};
