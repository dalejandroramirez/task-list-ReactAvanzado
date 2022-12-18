// 0 - Renderizado del componente

import { render } from "@testing-library/react";
import TaskList from "./TodoList";

describe("Renderizar el componente", () => {
  test("Renderizar el componente", () => {
    const r = render(<TaskList />);
    expect(r).toBeDefined();
  });
})

