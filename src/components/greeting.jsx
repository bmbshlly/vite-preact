import register from "preact-custom-element";
import "./taildwind.css";
import ModalUnstyled from "./modal";

const Greeting = ({ name = "World" }) => (
  <>
    <p class="text-orange-500">Hello, {name}!</p>
    <ModalUnstyled />
  </>
);

register(Greeting, "x-greeting", ["name"], { shadow: false });

export default Greeting;
