"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTransition = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      window.location.href = "/survey";
    }, 1000);
  };

  return (
    <motion.div
      className="relative min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50"
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 2,
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60"
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 4,
        }}
      ></motion.div>

      <div className="max-w-2xl text-center z-10">
        <h1 className="text-5xl font-bold text-blue-900 mb-6">
          Welcome to Medvice
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Know your past, cure your future
        </p>
        <motion.button
          onClick={handleTransition}
          className={`btn btn-primary btn-lg transition-transform duration-500 ${
            isTransitioning ? "transition-start" : "scale-100"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started
        </motion.button>
      </div>
      <div className="mt-12 z-10">
        <Image
          width={800}
          height={747}
          src="/medvice.png"
          alt="Medvice Logo"
          className="rounded-md shadow-md"
        />
      </div>

      {isTransitioning && (
        <div className="fixed inset-0 z-20 transition-effect"></div>
      )}
    </motion.div>
  );
}
