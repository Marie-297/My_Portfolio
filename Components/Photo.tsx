"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
  return (
    <div className="lg:h-full w-full relative bg-opacity-70">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 ,duration: 0.6, ease: "easeIn" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 3 ,duration: 1, ease: "easeInOut"}  }}
          className="w-[180px] h-[180px] md:w-[350px] md:h-[350px] lg:w-[500px]lg:h-[500px] mix-blend-lighten"
        >
          <Image
            src="/images/code-imoji.jpg"
            priority
            alt="Marie's photo"
            fill
            quality={100}
            className="object-contain"
          />
        </motion.div>
        <motion.svg
        className="absolute inset-0 w-308px h-308px lg:w-508px lg:h-508px "
        viewBox="0 0 508 508"
        xmlns="http://www.w3.org/2001/XMLSchema"
        >
          <motion.rect x="2" y="2" rx="50" ry="50" width="504" height="504" stroke="#FF8C00" strokeWidth="4"
            fill="transparent"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0"}}
            animate={{ strokeDasharray: ["15 120 25 25", "16 25 22 32", "4 20 22 22", "15 120 25 25"], rotate: [0, 0], }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Photo