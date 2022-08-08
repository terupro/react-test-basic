/* テストコードの基本
① Arrage：(テストデータ、条件、環境の設定) = 準備
② Act：(ロジックの実行、関数の実行) = 実行
③ Assertion：(実行結果と期待する結果の比較) = 結果の確認
*/

import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("「カウントアップ」押下で「現在のカウント」が+1されるか", () => {
  // Arrage
  render(<Counter originCount={0} />);

  // 更新前
  const spanElBeforeUpdate = screen.getByText("現在のカウント:0");
  expect(spanElBeforeUpdate).toBeInTheDocument();

  // Act
  const btn = screen.getByRole("button", { name: "カウントアップ" });
  fireEvent.click(btn);

  // Assertion
  const spanEl = screen.getByText("現在のカウント:1");
  expect(spanEl).toBeInTheDocument(); // 要素が存在するか
});
