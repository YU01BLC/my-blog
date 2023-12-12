import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArticlePreview from '../../src/app/components/ArticlePreview';

describe('DummyArticleコンポーネントSnapshot', () => {
  it('snapshot', () => {
    const testData = { id: 'testId' };
    const { asFragment } = render(<ArticlePreview params={testData} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('DummyArticleコンポーネント表示確認', () => {
  it('DummyArticleコンポーネントが表示されていること', () => {
    const testData = { id: 'testId' };
    render(<ArticlePreview params={testData} />);
    const element = screen.getByTestId('dummy-article');
    expect(element).toBeInTheDocument();
  });
});

describe('Cardコンポーネント表示確認', () => {
  it('CardHeaderコンポーネントが表示されていること', () => {
    const testData = { id: 'testId' };
    render(<ArticlePreview params={testData} />);
    const cardElement = screen.getByText('記事タイトル(dummy)');
    expect(cardElement).toBeInTheDocument();
  });
  it('CardMediaコンポーネントが表示されていること', () => {
    const testData = { id: 'testId' };
    render(<ArticlePreview params={testData} />);
    const cardElement = screen.getByAltText(/blog image/i);
    expect(cardElement).toBeInTheDocument();
  });
  it('Typographyコンポーネントが表示されていること', () => {
    const testData = { id: 'testId' };
    render(<ArticlePreview params={testData} />);
    const cardElement = screen.getByTestId('dummy-article--text');
    expect(cardElement).toBeInTheDocument();
  });
});
