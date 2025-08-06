import { useState } from "react";
import { timelineData } from "../../data/timelineData";
import styles from "./HistoricalTimeline.module.scss";
import TimelineCircle from "../TimelineCircle/TimelineCircle";
import EventSlider from "../EventSlider/EventSlider";
import Arrows from "../Arrows/Arrows";
import YearsDisplay from "../YearsDisplay/YearsDisplay";

const HistoricalTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextCategory = () => {
    setActiveIndex((prev) => (prev + 1) % timelineData.length);
  };

  const handlePrevCategory = () => {
    setActiveIndex(
      (prev) => (prev - 1 + timelineData.length) % timelineData.length
    );
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const events = timelineData[activeIndex].events;

  return (
    <div className={styles.timelineWrapper}>
      <div className={`${styles.sideLines} ${styles.left}`} />
      <div className={`${styles.sideLines} ${styles.right}`} />
      <h2 className={styles.title}>
        <span>Исторические</span>
        <span>даты</span>
      </h2>
      <YearsDisplay
        prevYear={events[0].year}
        lastYear={events[events.length - 1].year}
      />
      <div className={styles.timelineVisual}>
        <TimelineCircle
          periods={timelineData.map((item) => ({
            id: item.id,
            label: `${item.id}`,
            title: item.title,
          }))}
          activeIndex={activeIndex}
          onDotClick={handleDotClick}
        />
      </div>
      <Arrows
        onNext={handleNextCategory}
        onPrev={handlePrevCategory}
        currentIndex={activeIndex}
        total={timelineData.length}
        onDotClick={handleDotClick}
      />
      <EventSlider events={events} />
    </div>
  );
};

export default HistoricalTimeline;
