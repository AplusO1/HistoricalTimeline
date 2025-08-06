import { motion, cubicBezier } from "framer-motion";
import styles from "./EventSlider.module.scss";

interface Props {
  year: number;
  title: string;
  description: string;
}

const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const transition = {
  duration: 2,
  ease: cubicBezier(0.25, 0.1, 0.25, 1),
};

const EventCard = ({ year, title, description }: Props) => {
  return (
    <motion.div
      className={styles.eventCard}
      variants={fadeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
    >
      <p className={styles.year}>{year}</p>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </motion.div>
  );
};

export default EventCard;
