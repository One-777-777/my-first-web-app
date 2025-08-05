// ここからコードを書いてください
// tabs.jsというファイルからsetupTabs関数を読み込む
import { setupConverter } from "./js/converter.js";
import { setupTabs } from "./js/tabs.js";

// ウェブページが完全に読み込まれたら、setupTabs関数を呼び出す
document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  setupConverter();
});
