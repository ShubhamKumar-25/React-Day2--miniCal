import styles from "./App.module.css";
import Button from "./components/Button";
import Display from "./components/Display";

function App() {
  return (
    <center>
      <div className={styles.calculator}>
        <Display />
        <Button />
      </div>
    </center>
  );
}

export default App;
