import styles from "./Arrows.module.scss";
import MobilePaginationDots from "./MobilePaginationDots";

interface Props {
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  total: number;
  onDotClick: (index: number) => void;
}

const formatNumber = (n: number) => String(n).padStart(2, "0");

const Arrows = ({ onNext, onPrev, currentIndex, total, onDotClick }: Props) => {
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === total - 1;

  return (
    <div className={styles.arrows}>
      <div className={styles.leftGroup}>
        <div className={styles.counter}>
          {formatNumber(currentIndex + 1)}/{formatNumber(total)}
        </div>

        <div className={styles.buttonsDots}>
          <div className={styles.buttons}>
            <button
              onClick={onPrev}
              className={styles.arrowBtn}
              disabled={isFirst}
            >
              &lt;
            </button>

            <button
              onClick={onNext}
              className={styles.arrowBtn}
              disabled={isLast}
            >
              &gt;
            </button>
          </div>

          <MobilePaginationDots
            total={total}
            currentIndex={currentIndex}
            onDotClick={onDotClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Arrows;
