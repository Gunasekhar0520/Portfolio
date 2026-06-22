import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function ParticleBackground() {
  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        particles: {
          number: { value: 45, density: { enable: true, area: 900 } },
          color: { value: ['#00b3ff', '#8a2be2', '#7c3aed'] },
          opacity: { value: 0.55, random: { enable: true, minimumValue: 0.2 } },
          size: { value: { min: 1, max: 3.5 } },
          links: {
            enable: true,
            distance: 150,
            color: '#55d8ff',
            opacity: 0.16,
            width: 1
          },
          move: { enable: true, speed: 1.2, direction: 'none', outModes: { default: 'out' } }
        },
        interactivity: {
          events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
          modes: { repulse: { distance: 120, duration: 0.4 } }
        },
        detectRetina: true
      }}
      style={{ position: 'absolute', inset: 0, zIndex: -20 }}
    />
  )
}
