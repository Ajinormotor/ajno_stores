"use client";

import { Provider } from "react-redux";
import store from "./store"; // Ensure store is correctly typed
import { ReactNode } from "react"; // Import ReactNode for proper type

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
