import { render, screen } from "@testing-library/react";
import Article from "../../src/app/articles/page";
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom";
import Page from "../../src/app/page";

describe("Page(Article)コンポーネントSnapshot", () => {
  it("snapshot", () => {
    const { asFragment } = render(<Article />);
    expect(asFragment()).toMatchSnapshot();
  });
});
describe("Page(Article)コンポーネント表示確認", () => {
  it("テキスト「articles」が表示されること", () => {
    render(<Article />);
    const headElement = screen.getByText("articles");
    expect(headElement).toBeInTheDocument();
  });
});

// 最上位Pageコンポーネント遷移テスト
describe("ページ遷移テスト", () => {
  // app routerでのページ遷移に関するテスト方法が現状不明。一旦スキップで対応する。
  xit("テキスト「My Blog」押下時に「MyBlog(最上位Page)」コンポーネント要素のテキスト「記事投稿」が表示されること", async () => {
    render(<Page />);
    userEvent.click(screen.getByText("My Blog"))
    expect(await screen.getByText('記事投稿')).toBeInTheDocument()
  });
});