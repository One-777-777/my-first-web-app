// ここからコードを書いてください
// HTMLから要素を探して取得する
export function setupTabs() {
  const homeLink = document.querySelector('[data-tab="home"]');
  const converterTab = document.querySelector('[data-tab="converter"]');

  const homeSection = document.getElementById("home");
  const converterSection = document.getElementById("converter");

  // Homeのリンクがクリックされたときの動作
  homeLink.addEventListener("click", () => {
    // 単位変換のセクションを非表示にする
    converterSection.classList.add("hidden");
    // ホームセクションを表示する
    homeSection.classList.remove("hidden");
  });

  // Converterのタブがクリックされたときの動作
  converterTab.addEventListener("click", () => {
    // ホームセクションを非表示にする
    homeSection.classList.add("hidden");
    // 単位変換のセクションを表示する
    converterSection.classList.remove("hidden");
  });
}
