import { useApp } from "../../hooks/useApp";
import { Modal } from "../modal/Modal";
import styles from "./styles.module.css";

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useApp();
  return (
    <>
      {isLoading && <Modal />}
      <div className={styles.layout}>{children}</div>
    </>
  );
};
