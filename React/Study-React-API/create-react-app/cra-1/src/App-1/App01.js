import styles from "./App.module.css";
import Button from "./Button";

function App01() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App01;
