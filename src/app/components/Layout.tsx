import { Outlet, useLocation } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useEffect } from "react";

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div
      style={{
        background: "#0A0A0A",
        minHeight: "100vh",
        fontFamily: "'Inter', 'DM Sans', sans-serif",
        color: "#FFFFFF",
      }}
    >
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
