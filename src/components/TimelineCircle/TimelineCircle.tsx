import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./TimelineCircle.module.scss";

interface Period {
  id: number;
  label: string;
  title: string;
}

interface Props {
  periods: Period[];
  activeIndex: number;
  onDotClick: (index: number) => void;
}

const TimelineCircle = ({ periods, activeIndex, onDotClick }: Props) => {
  const circleRef = useRef<HTMLDivElement>(null); //ссылка для анимации GSAP
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); //увеличение точки при hover
  const [isMobile, setIsMobile] = useState(false); //адаптив для мобилки
  const [showCategoryLabel, setShowCategoryLabel] = useState(false); //появление категории после gsap анимации
  const [displayedIndex, setDisplayedIndex] = useState(activeIndex); //показываем для кого рендерить категорию(избавляемся от мерцания)

  const stepAngle = 360 / periods.length; //размещаем точки по окружности
  const activeAngle = activeIndex * stepAngle; // компенсируем вращение при активации( угол в градусах, на который должна быть повернута вся окружность)
  const initialOffset = 20; // смещение круга изначальное
  const smallSize = 6;
  const largeSize = 56;
  const radius = 265; // расположение точек

  // определение мобильного экрана
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // вращение круга при смене активного индекса
  useEffect(() => {
    if (!isMobile && circleRef.current) {
      setShowCategoryLabel(false); // Скрываем до анимации
      gsap.to(circleRef.current, {
        rotation: -activeAngle, //прокрутка назад что бы точка активная была сверху
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          setDisplayedIndex(activeIndex); //обновляем только после анимации
          setShowCategoryLabel(true); // Показываем после завершения
        },
      });
    } else if (!isMobile) {
      setDisplayedIndex(activeIndex);
      setShowCategoryLabel(true);
    }
  }, [activeAngle, isMobile, activeIndex]);

  if (isMobile) {
    return (
      <div className={styles.mobileCategory}>{periods[activeIndex]?.title}</div>
    );
  }

  return (
    <div className={styles.circleWrapper}>
      <div className={styles.circle} ref={circleRef}>
        {periods.map(({ id, label, title }, i) => {
          const angle = i * stepAngle + initialOffset;
          const isActive = i === activeIndex;
          const isHovered = i === hoveredIndex;
          const isLarge = isActive || isHovered;

          const size = isLarge ? largeSize : smallSize;
          const offset = radius + size / 2; // учитываем размер dot что бы не вылазила за круг
          const rotation = activeAngle - angle; //выравниваем текст

          const dotStyle: React.CSSProperties = {
            transform: `rotate(${angle}deg) translateY(-${offset}px)`, //Задаем CSS-трансформацию для точки (dot), чтобы расположить её по кругу
          };
          const labelRotate: React.CSSProperties = {
            ["--label-rotate" as keyof React.CSSProperties]: `${rotation}deg`, //управляем поворотом текста (лейбла) внутри точки
          };

          return (
            <div
              key={id}
              className={styles.dotWrapper}
              style={dotStyle}
              onClick={() => onDotClick(i)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`${styles.dot} ${isLarge ? styles.active : ""}`}>
                <span
                  className={`${styles.label} ${
                    isLarge ? styles.labelVisible : ""
                  }`}
                  style={labelRotate}
                >
                  {label}
                </span>

                {i === displayedIndex && showCategoryLabel && (
                  <span
                    className={`${styles.categoryLabel} ${styles.categoryLabelVisible}`}
                    style={labelRotate}
                  >
                    {title}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineCircle;
