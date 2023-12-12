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
  const cardData = [
    { id: 1, title: '記事タイトル: 1', alt: 'blog image: 1', testId: 'article-list--text1' },
    { id: 2, title: '記事タイトル: 2', alt: 'blog image: 2', testId: 'article-list--text2' },
    { id: 3, title: '記事タイトル: 3', alt: 'blog image: 3', testId: 'article-list--text3' },
  ];
  it('CardHeaderコンポーネントが表示されていること', () => {
    render(<ArticleList />);
    cardData.forEach((card) => {
      // getByTitleで取得するとCSS FWの仕様上取得できない(title要素として表示されていない)
      const cardElement = screen.getByText(card.title);
      expect(cardElement).toBeInTheDocument();
    });
  });
  it('CardMediaコンポーネントが表示されていること', () => {
    render(<ArticleList />);
    cardData.forEach((card) => {
      // getByTitleで取得するとCSS FWの仕様上取得できない(title要素として表示されていない)
      const cardElement = screen.getByAltText(card.alt);
      expect(cardElement).toBeInTheDocument();
    });
  });
  it('Typographyコンポーネントが表示されていること', () => {
    render(<ArticleList />);
    cardData.forEach((card) => {
      const cardElement = screen.getByTestId(card.testId);
      expect(cardElement).toBeInTheDocument();
    });
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
