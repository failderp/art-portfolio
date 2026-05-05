import styles from "./Button.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
  height?: string;
  width?: string;
  onClick?: () => void;
  type?: "A" | "B" | "C";
}

export const Button: React.FC<Props> = ({
  children,
  className = "",
  height,
  width,
  onClick,
  type = "A",
}) => {
  return (
    <div className={styles.container}>
      <button className={`${styles.button} ${styles["type" + type]} ${className}`} style={{ height, width }} onClick={onClick}>
        <div className={styles.button__line}></div>
        <div className={styles.button__line}></div>
        <span className={styles.button__text}>{children}</span>
        <div className={styles.button__drow1}></div>
        <div className={styles.button__drow2}></div>
      </button>
    </div>
  );
};
