import { startOfDay } from "date-fns";
import { generate } from "random-words";

document.querySelector("#app").innerHTML = generate(15)
  .toString()
  .replaceAll(",", " ");
