import styles from "./styles.module.css";

export const Modal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <p>Loading PDF file...</p>
      </div>
    </div>
  );
};
