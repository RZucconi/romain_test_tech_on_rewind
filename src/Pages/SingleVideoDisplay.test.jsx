import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import SingleVideoDisplay from "./SingleVideoDisplay";

let container = null;
beforeEach(() => {
  container = document.createElement("h3");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Display a single card", () => {
  act(<SingleVideoDisplay name="Toto" />, container);
});
expect(container.textContent).toBe("Toto");
