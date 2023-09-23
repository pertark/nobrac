import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { motion, AnimatePresence } from 'framer-motion'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import ZeroDevWrapper from '@/components/ZeroDevWrapper'
import '@rainbow-me/rainbowkit/styles.css';

const variants = {
  initial: {
    x: 0,
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
    }        
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    }        
  },
  exit: {
    x: -100,
    y: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
    }        
  }
}
export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ZeroDevWrapper>
      <Nav></Nav>
      <AnimatePresence
        mode="wait" 
        initial={false}
      >
        <motion.div key={router.route} variants={variants} initial="initial" animate="animate" exit="exit">
          <Component {...pageProps} />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </ZeroDevWrapper>
  )
}
