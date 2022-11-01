import React from "react";
import { AppRootContextProvider } from "../utils/AppRootContext";

export default function BaseLayout() {
  return <AppRootContextProvider></AppRootContextProvider>;
}
