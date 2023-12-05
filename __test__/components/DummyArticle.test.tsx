import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DummyArticle from '../../src/app/components/DummyArticle';

describe('DummyArticleコンポーネントSnapshot', () => {
  it('snapshot', () => {
    const { asFragment } = render(<DummyArticle />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('DummyArticleコンポーネント表示確認', () => {
  it('DummyArticleコンポーネントが表示されていること', () => {
    render(<DummyArticle />);
    const element = screen.getByTestId('dummy-article');
    expect(element).toBeInTheDocument();
  });
});

describe('Cardコンポーネント表示確認', () => {
  it('CardHeaderコンポーネントが表示されていること', () => {
    render(<DummyArticle />);
    const cardElement = screen.getByText('記事タイトル(dummy)');
    expect(cardElement).toBeInTheDocument();
  });
  it('CardMediaコンポーネントが表示されていること', () => {
    render(<DummyArticle />);
    const cardElement = screen.getByAltText(/Paella dish/i);
    expect(cardElement).toBeInTheDocument();
  });
  it('Typographyコンポーネントが表示されていること', () => {
    render(<DummyArticle />);
    const cardElement = screen.getByTestId('dummy-article--text');
    expect(cardElement).toBeInTheDocument();
  });
});
