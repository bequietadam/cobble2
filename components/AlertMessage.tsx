import { motion } from "framer-motion"

const transition = {
  duration: .15
}
const variants = {
  init: {
    opacity: 0,
    y: 20,
    transition: transition
  },
  anim: {
    opacity: 1,
    y: 0,
    transition: transition
  }
}


export default function AlertMessage({ message, type }: { message: string, type?: 'success' | 'error' }) {

  return (
    <motion.div
      className={`alert-${type === 'error' ? 'error' : 'success'}`}
      initial="init"
      animate="anim"
      exit="init"
      variants={variants}
    >{message}</motion.div>
  )
}