import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Page from '../../src/app/page';
import Article from '../../src/app/articles/page';

describe('Page(Article)コンポーネントSnapshot', () => {
  it('snapshot', () => {
    const { asFragment } = render(<Article />);
    expect(asFragment()).toMatchSnapshot();
  });
});
describe('Page(Article)コンポーネント表示確認', () => {
  it('articleコンポーネントが表示されること', () => {
    render(<Article />);
    const headElement = screen.getByTestId('article');
    expect(headElement).toBeInTheDocument();
  });
});

// 最上位Pageコンポーネント遷移テスト
describe('ページ遷移テスト', () => {
  // app routerでのページ遷移に関するテスト方法が現状不明。一旦スキップで対応する。
  xit('テキスト「My Blog」押下時に「MyBlog(最上位Page)」コンポーネント要素のテキスト「記事投稿」が表示されること', async () => {
    render(<Page />);
    userEvent.click(screen.getByText('My Blog'));
    expect(await screen.getByText('記事投稿')).toBeInTheDocument();
  });
});
