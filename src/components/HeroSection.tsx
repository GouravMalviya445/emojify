"use client";
import { useRouter } from "next/navigation";
import { Button } from "./Button";
import { motion } from "framer-motion";

export function HeroSection({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex items-center justify-center bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2] ${className}`}
    >
      <div className="flex flex-col items-center gap-10 py-24">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-bold text-white text-5xl sm:text-6xl md:text-7xl leading-none"
        >
          Emojify 👷
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-medium text-white text-center text-2xl"
        >
          Add a perfect emoji to your Git commits 🚀
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center space-x-3"
        >
          <a href="https://github.com/GouravMalviya445" target="_blank">
            <Button
              className="text-lg hover:bg-pink-600 hover:-translate-y-1 hover:shadow-[0_4px_0_1px_black] transition-all duration-200 ease-in"
              variant="secondary"
            >
              github
            </Button>
          </a>
          <a href="https://twitter.com/gouravdotcom" target="_blank">
            <Button className="text-lg hover:bg-orange-600 hover:-translate-y-1 hover:shadow-[0_4px_0_1px_black] transition-all duration-200 ease-in">
              twitter
            </Button>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            onClick={() => router.push("/emoji/add")}
            variant="plane"
            className="text-green-500 font-semibold hover:underline transition-all duration-200 ease-in-out"
          >
            Add your emoji
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
