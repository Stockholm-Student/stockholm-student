// components/ScrollSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/stock.jpg"; // Import correct de l'image

const ScrollSection = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen relative flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/45" /> {/* Opacité réduite */}
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 py-20">
        <div className="flex flex-col items-start space-y-16">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 max-w-2xl"
          >
            <h2 className="text-5xl font-bold text-black">
              So many questions...
            </h2>
            <h3 className="text-4xl text-black">
              and we try to answer all of them!
            </h3>
          </motion.div>

          {/* Wiki Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 max-w-2xl"
          >
            <p className="text-xl text-gray-800">
              Browse our wiki to find useful Information and Tips on common
              topics that make your Student life easier!
            </p>
            <motion.button
              onClick={() => navigate("/wiki")}
              className="relative overflow-hidden bg-black text-white px-8 py-3 rounded-full text-lg
                       flex items-center gap-2 transition-all
                       shadow-[0_0_15px_rgba(0,0,0,0.2)]
                       hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]
                       before:absolute before:inset-0 before:bg-gradient-to-r 
                       before:from-transparent before:via-white/20 before:to-transparent
                       before:translate-x-[-200%] hover:before:translate-x-[200%]
                       before:transition-transform before:duration-1000"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Wiki</span>
              <span className="relative z-10 text-xl">→</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;
