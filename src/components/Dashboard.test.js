import { render } from "@testing-library/react";

import React from "react";
import Dashboard from "./Dashboard.js";


it("renders without crashing", () => {
  render(<Dashboard />);
});
