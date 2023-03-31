import React, { useRef, useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    // Document qui est un element du dom dans ce cas marche dans un useEffect
    const loading = document.querySelector(`.loader`);
    window.addEventListener("load", () => {
      if (sessionStorage.getItem("premierChargement") === null) {
        loading.classList.add("fondu-out");
        loading.style.display = "none";
      } else {
        loading.style.display = "none";
      }
      sessionStorage.setItem("premierChargement", "done");
    });
  }, []);

  return (
    <div className="loader">
      <span className="lettre">L</span>
      <span className="lettre">O</span>
      <span className="lettre">A</span>
      <span className="lettre">D</span>
      <span className="lettre">I</span>
      <span className="lettre">N</span>
      <span className="lettre">G</span>
    </div>
  );
};

export default Loader;
