import "@testing-library/jest-dom";

import { configure } from "@testing-library/react";

configure({
  throwSuggestions: true,
});

jest.setTimeout(10000);
