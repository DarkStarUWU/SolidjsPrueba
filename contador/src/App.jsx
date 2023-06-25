import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal, onCleanup } from "solid-js";
import { render } from "solid-js/web";

function App(props) {
  const [count, setCount] = createSignal(0),
  timer = setInterval(() => setCount(count() + 1), 1000);
  onCleanup(() => clearInterval(timer));

  return (
    
    
    <div>{count()}</div>

  );
}

render(() => <App />, document.getElementById("app"));
