import { render } from "@testing-library/react";

import React from "react";
import Display from "./Display.js";


it("renders without crashing", () => {
  render(<Display />);
});
