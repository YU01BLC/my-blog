import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ArticleList from '../../src/app/components/ArticleList';

describe('ArticleListコンポーネントSnapshot', () => {
  it('snapshot', () => {
    const { asFragment } = render(<ArticleList />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('ArticleListコンポーネント表示確認', () => {
  it('ArticleListコンポーネントが表示されていること', () => {
    render(<ArticleList />);
    const element = screen.getByTestId('article-list');
    expect(element).toBeInTheDocument();
  });
});

describe('Cardコンポーネント表示確認', () => {
  it('CardHeaderコンポーネントが表示されていること', () => {
    render(<ArticleList />);
    // getByTitleで取得するとCSS FWの仕様上取得できない(title要素として表示されていない)
    const cardElement = screen.getByText('記事タイトル');
    expect(cardElement).toBeInTheDocument();
  });
  it('CardMediaコンポーネントが表示されていること', () => {
    render(<ArticleList />);
    // getByTitleで取得するとCSS FWの仕様上取得できない(title要素として表示されていない)
    const cardElement = screen.getByAltText(/Paella dish/i);
    expect(cardElement).toBeInTheDocument();
  });
  it('Typographyコンポーネントが表示されていること', () => {
    render(<ArticleList />);
    const cardElement = screen.getByTestId('article-list--text');
    expect(cardElement).toBeInTheDocument();
  });
});

describe('Cardコンポーネント動作確認テスト', () => {
  // app routerでのページ遷移に関するテスト方法が現状不明。一旦スキップで対応する。
  xit('Cardコンポーネント内の画像箇所押下で「hoge」ページに遷移すること', async () => {
    render(<ArticleList />);
    userEvent.click(screen.getByAltText(/Paella dish/i));
    expect(await screen.getByText('')).toBeInTheDocument();
  });
});
