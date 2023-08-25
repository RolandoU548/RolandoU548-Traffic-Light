import React, { useEffect, useState } from "react";
import "../../styles/trafficLight.css";

export const TrafficLight = () => {
  const [color, setColor] = useState("verde");
  const [isAutomatic, setIsAutomatic] = useState(false);

  useEffect(() => {
    if (isAutomatic) {
      setTimeout(() => {
        if (color === "verde") setColor("amarillo");
        else if (color === "amarillo") setColor("rojo");
        else setColor("verde");
      }, 1000);
    }
  });

  return (
    <div className="row">
      <div className="col-lg-4"></div>
      <div className="col-lg-4 col-12">
        <div className="semaforo">
          <div
            className={"luces " + (color === "rojo" ? "semaforo__rojo" : "")}
            onClick={() => {
              isAutomatic ? null : setColor("rojo");
            }}
          ></div>
          <div
            className={
              "luces " + (color === "amarillo" ? "semaforo__amarillo" : "")
            }
            onClick={() => {
              isAutomatic ? null : setColor("amarillo");
            }}
          ></div>
          <div
            className={"luces " + (color === "verde" ? "semaforo__verde" : "")}
            onClick={() => {
              isAutomatic ? null : setColor("verde");
            }}
          ></div>
        </div>
        <div className="tubo"></div>
      </div>
      <div className="col-lg-4 col-12 d-flex justify-content-center align-items-center">
        <button
          className={isAutomatic ? "traficoAutomatico" : ""}
          onClick={() => setIsAutomatic(!isAutomatic)}
        >
          TRÁFICO AUTOMÁTICO
        </button>
      </div>
    </div>
  );
};
