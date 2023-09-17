import { useState } from "preact/hooks";
import Greeting from "./components/text";
// import preactLogo from "./assets/preact.svg";
// import viteLogo from "/vite.svg";
//import "./app.css";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <script src="https://package.mayank-8ca.workers.dev" />
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>checking 123.</div>
      <Greeting name="test" />
      <x-greeting name="Billy Jo"></x-greeting>
    </>
  );
}
