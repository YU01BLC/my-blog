import { render, screen } from "@testing-library/react";
import Page from "../../src/app/articles/page";
import "@testing-library/jest-dom";

describe("PageコンポーネントSnapshot", () => {
  it("snapshot", () => {
    const { asFragment } = render(<Page />);
    expect(asFragment()).toMatchSnapshot();
  });
});
describe("Pageコンポーネント表示確認", () => {
  it("テキスト「articles」が表示されること", () => {
    render(<Page />);
    const headElement = screen.getByText("articles");
    expect(headElement).toBeInTheDocument();
  });
});
