import { render, screen } from "@testing-library/react";
import Header from "../src/app/Header";
import Footer from "../src/app/Footer";
import Page from "../src/app/page";
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom";

describe("Page(Footer)コンポーネントSnapshot", () => {
  it("snapshot", () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});

// Footerコンポーネント画面表示要素確認テスト
describe("Page(Footer)コンポーネント表示確認", () => {
   it("テキスト「@2023 shincode」が表示されること", () => {
    render(<Footer />);
    const headElement = screen.getByText("@2023 shincode");
    expect(headElement).toBeInTheDocument();
  });
});

// ページ遷移テスト
describe("ページ遷移テスト", () => {
  // app routerでのページ遷移に関するテスト方法が現状不明。一旦スキップで対応する。
  xit("テキスト「記事を書く」押下時に「Articles」コンポーネント要素のテキスト「articles」が表示されること", async () => {
    render(<Header />);
    userEvent.click(screen.getByText("記事を書く"))
    expect(await screen.getByText('articles')).toBeInTheDocument()
  });
  xit("テキスト「My Blog」押下時に「MyBlog(最上位Page)」コンポーネント要素のテキスト「記事投稿」が表示されること", async () => {
    render(<Page />);
    userEvent.click(screen.getByText("My Blog"))
    expect(await screen.getByText('記事投稿')).toBeInTheDocument()
  });
});