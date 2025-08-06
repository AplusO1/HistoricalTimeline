import styles from './Arrows.module.scss';

interface Props {
  total: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
}

const MobilePaginationDots = ({ total, currentIndex, onDotClick }: Props) => {
  return (
    <div className={styles.dots}>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`${styles.dot} ${i === currentIndex ? styles.active : ''}`}
          onClick={() => onDotClick(i)}
        />
      ))}
    </div>
  );
};

export default MobilePaginationDots;
