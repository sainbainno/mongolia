// script.js

// モンゴル国内の大学データ
const universities = [
    { name: "モンゴル国立大学", url: "http://www.num.edu.mn" },
    { name: "モンゴル科学技術大学", url: "http://www.must.edu.mn" },
    { name: "モンゴル医科大学", url: "http://www.mnums.edu.mn" },
    { name: "ウランバートル大学", url: "http://www.ub.edu.mn" },
    { name: "モンゴル人文社会大学", url: "http://www.humanities.mn" },
];

// コンテナを取得
const listContainer = document.querySelector(".university-list");

// 大学リストを生成
universities.forEach((university) => {
    const link = document.createElement("a");
    link.className = "university-item";
    link.textContent = university.name;
    link.href = university.url;
    link.target = "_blank"; // 新しいタブで開く
    listContainer.appendChild(link);
});

// ログ出力（デバッグ用）
console.log("大学リストが生成されました:", universities);
