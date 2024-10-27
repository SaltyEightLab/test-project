import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>お問い合わせフォーム</h1>
      <h2>以下にお客様の情報を入力してください。</h2>
      <span title="close">X</span>
      <p>すべてのフィールドは必須項目です。</p>
      <img src="https://sample_img.png" alt="sample alt" />
      <div data-testid="custom-element">カスタムHTML</div>
      <form action="">
        <div>
          <label htmlFor="name">お名前</label>
          <input type="text" id="name" placeholder="フルネーム" value="SaltyEight" onChange={() => {}} />
        </div>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="questions">お問い合わせ内容</label>
          <select id="questions">
            <option value="">お問い合わせ内容を選択してください。</option>
            <option value="dev">開発案件のご相談</option>
            <option value="video">撮影のご相談</option>
            <option value="sns">SNSマーケティングのご相談</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />
            利用規約に同意します。
          </label>
        </div>
        <button type="submit">送信</button>
      </form>
    </div>
  );
};

export default Contact;
