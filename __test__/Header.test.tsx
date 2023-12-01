import { render, screen } from "@testing-library/react";
import Header from "../src/app/Header";
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom";

describe("Page(Header)コンポーネントSnapshot", () => {
  it("snapshot", () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});

// Headerコンポーネント画面表示要素確認テスト
describe("Page(Header)コンポーネント表示確認", () => {
  it("テキスト「My Blog」が表示されること", () => {
    render(<Header />);
    const headElement = screen.getByText("My Blog");
    expect(headElement).toBeInTheDocument();
  });

   it("テキスト「記事を書く」が表示されること", () => {
    render(<Header />);
    const headElement = screen.getByText("記事を書く");
    expect(headElement).toBeInTheDocument();
  });
});

// Headerコンポーネントページ遷移テスト
describe("ページ遷移テスト", () => {
  // app routerでのページ遷移に関するテスト方法が現状不明。一旦スキップで対応する。
  xit("テキスト「記事を書く」押下時に「Articles」コンポーネント要素のテキスト「articles」が表示されること", async () => {
    render(<Header />);
    userEvent.click(screen.getByText("記事を書く"))
    expect(await screen.getByText('articles')).toBeInTheDocument()
  });
});