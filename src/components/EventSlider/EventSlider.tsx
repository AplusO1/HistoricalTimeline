import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./EventSlider.module.scss";
import EventCard from "./EventCard";

interface Props {
  events: { id: number; title: string; year: number; description: string }[];
}

const EventSlider = ({ events }: Props) => (
  <div className={styles.eventSliderWrapper}>
    <div className={`${styles.arrowBtn} swiper-button-prev`} />

    <Swiper
      modules={[Navigation]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      breakpoints={{
        0: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
      }}
      className={styles.swiperContainer}
    >
      {events.map((event) => (
        <SwiperSlide key={event.id} className={styles.slide}>
          <EventCard
            year={event.year}
            title={event.title}
            description={event.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>

    <div className={`${styles.arrowBtn} swiper-button-next`} />
  </div>
);

export default EventSlider;
