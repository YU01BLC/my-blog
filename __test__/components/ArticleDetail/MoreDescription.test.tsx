import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import MoreDescription from '../../../src/app/components/ArticleDetail/MoreDescription';

describe('MoreDescriptionコンポーネントSnapshot', () => {
  it('snapshot', () => {
    const { asFragment } = render(<MoreDescription />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('MoreDescriptionコンポーネント表示確認', () => {
  it('MoreDescriptionンポーネントが表示されていること', () => {
    render(<MoreDescription />);
    const element = screen.getByText('続きを読む');
    expect(element).toBeInTheDocument();
  });
});

describe('Collapseコンポーネント表示確認', () => {
  // 「続きを読む」押下後に表示される追加コンテンツのこと
  it('「続きを読む」テキスト押下時にCollapseコンポーネントが表示されること', async () => {
    render(<MoreDescription />);
    userEvent.click(screen.getByText('続きを読む'));
    expect(await screen.getByTestId('moreDescription-more--contents')).toBeInTheDocument();
  });
  it('「続きを読む」テキスト押下時に「続きを読む」テキストが非表示になり、「閉じる」テキストが表示されること', async () => {
    render(<MoreDescription />);
    userEvent.click(screen.getByText('続きを読む'));
    await waitFor(() => {
      // getByTextで非表示確認を行うと存在しない場合にnullではなくエラーを返すため、queryByTextを使用する。
      expect(screen.queryByText('続きを読む')).not.toBeInTheDocument();
      expect(screen.getByText('閉じる')).toBeInTheDocument();
    });
  });
  it('「閉じる」テキスト押下時にCollapseコンポーネントが非表示になること', async () => {
    render(<MoreDescription />);
    userEvent.click(screen.getByText('続きを読む'));
    // コンテンツが表示され、「閉じる」テキストが表示されていることを確認
    await waitFor(() => {
      expect(screen.queryByText('続きを読む')).not.toBeInTheDocument();
      expect(screen.getByText('閉じる')).toBeInTheDocument();
      expect(screen.getByTestId('moreDescription-more--contents')).toBeInTheDocument();
    });
    // 「閉じる」テキストを押下
    userEvent.click(screen.getByText('閉じる'));
    // コンテンツと「閉じる」テキストが非表示となり、「続きを読む」テキストが表示されていることを確認
    await waitFor(() => {
      expect(screen.queryByText('閉じる')).not.toBeInTheDocument();
      expect(screen.getByText('続きを読む')).toBeInTheDocument();
      expect(screen.queryByTestId('moreDescription-more--contents')).not.toBeInTheDocument();
    });
  });
  it('「閉じる」テキスト押下時に「閉じる」テキストが非表示になり、「続きを読む」テキストが表示されること', async () => {
    render(<MoreDescription />);
    userEvent.click(screen.getByText('続きを読む'));
    await waitFor(() => {
      expect(screen.queryByText('続きを読む')).not.toBeInTheDocument();
      expect(screen.getByText('閉じる')).toBeInTheDocument();
    });
    userEvent.click(screen.getByText('閉じる'));
    await waitFor(() => {
      expect(screen.queryByText('閉じる')).not.toBeInTheDocument();
      expect(screen.getByText('続きを読む')).toBeInTheDocument();
    });
  });
});
