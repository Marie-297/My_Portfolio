"use client"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { ReactNode } from "react";

interface PageTransformProps {
  children: ReactNode;
}

const PageTransform: React.FC<PageTransformProps> = ({children}) => {
  const pathname = usePathname()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${pathname}-overlay`}
        initial={{ opacity: 0 , scaleY:0}}
        animate={{ opacity: 1, scaleY: 1  }}
        exit={{ opacity: 0, scaleY: 0 }}
        transition= {{ duration: 0.5, ease: 'easeInOut' }}
        className="min-h-screen w-screen bg-primary top-8"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransform