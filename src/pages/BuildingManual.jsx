import { useEffect } from "react";
import "../styles/pages/_BuildingManualPage.scss";
import Header from "../components/Header";
import BuildManual from "../components/BuildManual";

export default function BuildingManual() {
  useEffect(() => {
    document.body.classList.add("no-global");
    return () => document.body.classList.remove("no-global");
  }, []);

  useEffect(() => {
    document.body.classList.add("no-wallpaper");
    return () => document.body.classList.remove("no-wallpaper");
  }, []);

  return (
    <main className="manual-page">
      <Header title="BUILD MANUAL" />
      <BuildManual />
    </main>
  );
}
