"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import myPhoto from "@/public/profile.jpg";

const Hero = () => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const text = "Software Developer";
    const element = textRef.current;
    if (!element) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        element.textContent = text.slice(0, index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl w-full">

        {/* LEFT TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            OBUPREETHI G
            <span
              ref={textRef}
              className="block bg-gradient-to-r from-primary via-accent-light to-primary bg-clip-text text-transparent min-h-20 animate-gradient"
            ></span>
          </h1>

          <p className="text-lg text-neutral-dark mb-8 leading-relaxed max-w-lg">
            AI & ML enthusiast and full-stack developer with strong analytical thinking 
            and problem-solving skills, passionate about delivering unique and creative solutions.
          </p>

          <div className="flex gap-4">
  
          </div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-96 lg:h-full flex items-center justify-center"
        >
          {/* Glow background */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center opacity-20"
          >
            <div className="absolute w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          </motion.div>

          {/* Floating Image */}
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative z-10 w-64 h-64 lg:w-80 lg:h-80"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/30">
              <Image
                src={myPhoto}
                alt="Profile"
                className=" w-100 h-80 rounded-2xl"
                priority
              />
            </div>
          </motion.div>

          {/* Spinning circle */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-72 h-72 lg:w-96 lg:h-96 border-2 border-primary/20 rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient animation style */}
      <style>{`
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Hero;
