import register from "preact-custom-element";
import "./taildwind.css";

const Greeting = ({ name = "World" }) => (
  <p class="text-orange-500">Hello, {name}!</p>
);

register(Greeting, "x-greeting", ["name"], { shadow: false });

export default Greeting;
