import React, { useEffect, useRef, useState } from "react";
import TickManager from "../utils/TickerManager";
import Shader2d from "../utils/shader2d";
import circleVert from "../utils/circleVert.vert";
import circleFrag from "../utils/circleFrag.frag";

export const Background = () => {
  const [ticker] = useState(
    typeof window !== `undefined` ? new TickManager() : null,
  );
  const ref = useRef(null);

  useEffect(() => {
    if (!ref || !ref.current) return;
    if (!ticker) return;

    const shader = new Shader2d(ref.current, circleVert, circleFrag, {
      u_mouse: {
        type: "vec2",
        value: { x: 0, y: 0 },
      },
      u_spread: {
        type: "float",
        value: 1.0,
      },
      u_speed: {
        type: "float",
        value: 1.0,
      },
      u_warp: {
        type: "float",
        value: 1.0,
      },
      u_focus: {
        type: "float",
        value: 1.0,
      },
      u_itensity: {
        type: "float",
        value: 0.5,
      },
    });

    function onTick(delta: any, elapsed: any) {
      shader.render(elapsed);
    }

    function handleResize() {
      shader.resize(window.innerWidth, window.innerHeight);
    }

    ticker.on(onTick);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref, ticker]);
  return (
    <canvas ref={ref} id="flourishCanvas" width={"100vw"} height={"100vh"} />
  );
};
