import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollSection from "../components/ScrollSection";

const Home = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black">
      {/* Background with parallax effect */}
      <div className="relative h-screen overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: scrollY * 0.5 }}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-900/20 z-10" />
          <img
            src="/stockholm-day-night.jpg"
            alt="Stockholm"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Enhanced Main content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center space-y-6"
          >
            {/* Main Heading with enhanced animation */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 100,
              }}
              className="space-y-4"
            >
              <h1
                className="text-4xl md:text-5xl font-bold tracking-wider text-shadow-lg
                           bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text"
              >
                Your Student Life
              </h1>
              <div className="h-0.5 w-24 bg-white/30 mx-auto rounded-full" />
              <motion.h2
                className="text-2xl md:text-3xl font-light tracking-widest text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                in one place
              </motion.h2>
            </motion.div>

            {/* Enhanced Button Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-16"
            >
              <motion.button
                onClick={() => navigate("/events")}
                className="group relative overflow-hidden px-10 py-4 rounded-lg
                         bg-gradient-to-r from-blue-500/20 to-emerald-500/20
                         hover:from-blue-500/30 hover:to-emerald-500/30
                         border border-white/10 backdrop-blur-sm
                         transition-all duration-500 ease-out"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="relative z-10 text-lg font-medium tracking-[0.2em] uppercase
                           bg-gradient-to-r from-white to-gray-100 bg-clip-text
                           inline-flex items-center gap-3"
                >
                  <span>Discover Events</span>
                  <motion.svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </motion.svg>
                </motion.span>

                {/* Button hover effect */}
                <motion.div
                  className="absolute inset-0 -z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10" />
                  <div className="absolute inset-0 bg-white/5" />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform translate-x-1/2"
            animate={{
              y: [0, 10, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="flex flex-col items-center gap-3"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-sm font-light tracking-[0.5em] text-white/70">
                SCROLL
              </span>
              <div className="w-px h-8 bg-gradient-to-b from-white/70 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <ScrollSection />

      {/* Enhanced gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
};

export default Home;
