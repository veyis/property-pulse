"use client";

import { SessionProvider } from "next-auth/react";

const AuthProvider = (children) => {
  return <SessionProvider>AuthProvider</SessionProvider>;
};

export default AuthProvider;
