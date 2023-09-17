import { useState } from "preact/hooks";
import Greeting from "./components/greeting.jsx";
//import "./app.css";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <script src="https://package.mayank-8ca.workers.dev" />
      <script src="https://cdn.tailwindcss.com" />
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Greeting name="test" />
      {/* <x-greeting name="Billy Jo"></x-greeting> */}
    </>
  );
}
