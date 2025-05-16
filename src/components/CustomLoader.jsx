'use client'

export default function CustomLoader() {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <div className="relative w-40 h-40">
        <img
          src="assets/logo.jpg"
          alt="TechLuminix Logo"
          className="w-full h-full object-contain animate-glitch"
        />
      </div>
      <div className="mt-6 text-xl font-bold glitch-text text-black">TechLuminix</div>

      <style jsx>{`
        @keyframes glitch {
          0% {
            clip-path: inset(0 0 95% 0);
            transform: translate(0, 0);
          }
          10% {
            clip-path: inset(0 0 40% 0);
            transform: translate(-5px, -2px);
          }
          20% {
            clip-path: inset(50% 0 30% 0);
            transform: translate(3px, 1px);
          }
          30% {
            clip-path: inset(20% 0 55% 0);
            transform: translate(-4px, 0px);
          }
          40% {
            clip-path: inset(10% 0 75% 0);
            transform: translate(0px, 2px);
          }
          50% {
            clip-path: inset(40% 0 40% 0);
            transform: translate(3px, -1px);
          }
          60% {
            clip-path: inset(60% 0 25% 0);
            transform: translate(-3px, 2px);
          }
          70% {
            clip-path: inset(10% 0 80% 0);
            transform: translate(2px, -2px);
          }
          80% {
            clip-path: inset(5% 0 90% 0);
            transform: translate(-2px, 1px);
          }
          90% {
            clip-path: inset(0 0 100% 0);
            transform: translate(0, 0);
          }
          100% {
            clip-path: inset(0 0 100% 0);
            transform: translate(0, 0);
          }
        }

        .animate-glitch {
          animation: glitch 1.5s infinite;
        }

        .glitch-text {
          position: relative;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: 'TechLuminix';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          color: black;
          background: white;
          overflow: hidden;
          clip: rect(0, 900px, 0, 0);
        }

        .glitch-text::before {
          animation: glitchTop 1.5s infinite linear;
          color: #00f;
          z-index: -1;
        }

        .glitch-text::after {
          animation: glitchBottom 1.5s infinite linear;
          color: #f00;
          z-index: -2;
        }

        @keyframes glitchTop {
          0% {
            clip: rect(0, 9999px, 0, 0);
          }
          10% {
            clip: rect(0, 9999px, 20px, 0);
            transform: translate(-2px, -2px);
          }
          20% {
            clip: rect(0, 9999px, 0, 0);
            transform: translate(0, 0);
          }
        }

        @keyframes glitchBottom {
          0% {
            clip: rect(0, 9999px, 0, 0);
          }
          10% {
            clip: rect(20px, 9999px, 40px, 0);
            transform: translate(2px, 2px);
          }
          20% {
            clip: rect(0, 9999px, 0, 0);
            transform: translate(0, 0);
          }
        }
      `}</style>
    </div>
  )
}
