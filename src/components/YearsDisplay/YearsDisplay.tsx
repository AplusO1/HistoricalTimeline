import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./YearsDisplay.module.scss";

interface YearsDisplayProps {
  prevYear: number;
  lastYear: number;
}

const YearsDisplay = ({ prevYear, lastYear }: YearsDisplayProps) => {
  const prevRef = useRef<HTMLSpanElement>(null);
  const lastRef = useRef<HTMLSpanElement>(null);

  // Утилита для анимации числа
  const animateNumber = (el: HTMLSpanElement | null, target: number) => {
    if (!el) return;
    //берём текущее значение текста в элементе
    const current = Number(el.textContent) || 0;

    gsap.to(
      { val: current },
      {
        val: target,
        duration: 0.6,
        ease: "power1.inOut",
        onUpdate() {
          const rounded = Math.round(this.targets()[0].val);
          el.textContent = rounded.toString();
        },
      }
    );
  };

  // Первый рендер: установить значения напрямую
  useEffect(() => {
    prevRef.current!.textContent = prevYear.toString();
    lastRef.current!.textContent = lastYear.toString();
  }, []);

  // Анимация при обновлении
  useEffect(() => {
    animateNumber(prevRef.current, prevYear);
  }, [prevYear]);

  useEffect(() => {
    animateNumber(lastRef.current, lastYear);
  }, [lastYear]);

  return (
    <div className={styles.years}>
      <span ref={prevRef} className={styles.prevYear} />
      <span ref={lastRef} className={styles.lastYear} />
    </div>
  );
};

export default YearsDisplay;
