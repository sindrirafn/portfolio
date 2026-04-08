import styles from './ContentPanel.module.css';

function ContentPanel({ children }) {
  return (
    <div className={styles.contentPanel}>
      <div className={styles.inner}>
        {children}
      </div>
    </div>
  );
}

export default ContentPanel;
