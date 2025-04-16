import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("tsParticles init");
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: { value: "#000" },
        },
        particles: {
          number: { value: 100, density: { enable: true, area: 800 } },
          color: { value: "#FFD700" },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 0.5 },
          opacity: { value: 0.7 },
        },
      }}
    />
  );
};

export default ParticlesBackground;
