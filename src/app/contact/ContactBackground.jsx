
import React from 'react'

export default function ContactBackground() {
  return (
    <div className="   w-full bg-gradient-to-b flex flex-col items-center justify-center p-4 py-10">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-black opacity-10" />
      <div className="absolute inset-0 overflow-hidden  ">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(156, 163, 175, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(156, 163, 175, 0.2) 1px, transparent 1px)
          `,
            backgroundSize: "3rem 3rem",
            mask: "radial-gradient(circle at center, black 30%, transparent 50%)",
            WebkitMask:
              "radial-gradient(circle at center, black 30%, transparent 50%)",
            filter: "drop-shadow(0 0 1px rgba(156, 163, 175, 0.1))",
          }}
        />
      </div>

    
    </div>
  )
}



