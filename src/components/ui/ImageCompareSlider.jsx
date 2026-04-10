import { useCallback, useRef, useState } from 'react';
import styles from './ImageCompareSlider.module.css';

/**
 * Drag/swipe comparison slider between two images.
 * Props:
 *   before      – image URL shown on the left side
 *   after       – image URL shown on the right side
 *   beforeLabel – optional badge text (e.g. "Light")
 *   afterLabel  – optional badge text (e.g. "Dark")
 */
function ImageCompareSlider({ before, after, beforeLabel, afterLabel }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onMouseDown = (e) => {
    dragging.current = true;
    updatePosition(e.clientX);
  };
  const onMouseMove = (e) => {
    if (dragging.current) updatePosition(e.clientX);
  };
  const stopDrag = () => { dragging.current = false; };

  const onTouchStart = (e) => {
    dragging.current = true;
    updatePosition(e.touches[0].clientX);
  };
  const onTouchMove = (e) => {
    if (dragging.current) updatePosition(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className={styles.container}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={stopDrag}
      aria-label="Image comparison slider"
    >
      {/* After (right) – base layer */}
      <img
        src={after}
        alt={afterLabel || 'After'}
        className={styles.imageBase}
        draggable={false}
      />

      {/* Before (left) – clipped to slider position */}
      <img
        src={before}
        alt={beforeLabel || 'Before'}
        className={styles.imageOverlay}
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
      />

      {/* Divider + handle */}
      <div className={styles.divider} style={{ left: `${position}%` }}>
        <div className={styles.handle} aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="#333" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 4 3 10l4 6M13 4l4 6-4 6" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      {beforeLabel && <span className={styles.labelLeft}>{beforeLabel}</span>}
      {afterLabel && <span className={styles.labelRight}>{afterLabel}</span>}
    </div>
  );
}

export default ImageCompareSlider;
