import React, { useEffect, useState } from "react";
import "../../styles/trafficLight.css";

export const TrafficLight = () => {
  const [color, setColor] = useState("verde");
  const [isAutomatic, setIsAutomatic] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (isAutomatic) {
        if (color === "verde") {
          setColor("amarillo");
        } else if (color === "amarillo") {
          setColor("rojo");
        } else {
          setColor("verde");
        }
      }
    }, 1000);
  });

  return (
    <div className="contenedorSemaforo">
      <div className="semaforo">
        <div
          className={"luces " + (color === "rojo" ? "semaforo__rojo" : "")}
          onClick={() => {
            setColor("rojo");
          }}
        ></div>
        <div
          className={
            "luces " + (color === "amarillo" ? "semaforo__amarillo" : "")
          }
          onClick={() => {
            setColor("amarillo");
          }}
        ></div>
        <div
          className={"luces " + (color === "verde" ? "semaforo__verde" : "")}
          onClick={() => {
            setColor("verde");
          }}
        ></div>
      </div>
      <div className="tubo"></div>
      <button onClick={() => setIsAutomatic(!isAutomatic)}>
        TRÁFICO AUTOMÁTICO
      </button>
    </div>
  );
};
