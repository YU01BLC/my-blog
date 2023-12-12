import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '../src/app/page';

describe('PageコンポーネントSnapshot', () => {
  it('snapshot', () => {
    // Pageコンポーネントのレンダリング結果をオブジェクトとして定義(asFragment: 一般的にスナップショットの取得結果であることを示す名称として用いられる)
    const { asFragment } = render(<Page />);
    // asFragment()で取得したスナップショットを現在の状態と比較する
    expect(asFragment()).toMatchSnapshot();
  });
});
describe('Pageコンポーネント表示確認', () => {
  it('テキスト「記事タイトル」が表示されること', () => {
    // Pageコンポーネントをレンダリング
    render(<Page />);
    // 「記事タイトル(dummy)」というテキストを含む要素を取得
    const headElement = screen.getByText('記事タイトル(dummy)');
    // 取得した上記要素が画面上に存在することを確認
    expect(headElement).toBeInTheDocument();
  });
});
