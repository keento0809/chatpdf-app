import { Modal } from "../modal/Modal";
import styles from "./styles.module.css";

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Modal />
      <div className={styles.layout}>{children}</div>
    </>
  );
};
