import React, { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  question: string;
  terms: boolean;
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    question: '',
    terms: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      question: '',
      terms: false,
    });
    setIsSubmitted(false);
  };

  return (
    <div>
      <h1>お問い合わせフォーム</h1>
      {isSubmitted ? (
        <div>
          <p>お問い合わせありがとうございます</p>
          <button onClick={handleReset}>新しい問い合わせ</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">お名前</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-invalid={formData.name === ''}
            />
          </div>
          <div>
            <label htmlFor="email">メールアドレス</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-invalid={formData.email === ''}
            />
          </div>
          <div>
            <label htmlFor="question">お問い合わせ内容</label>
            <select
              id="question"
              name="question"
              value={formData.question}
              onChange={handleChange}
              required
            >
              <option value="">お問い合わせ内容を選択してください</option>
              <option value="dev">開発案件のご相談</option>
              <option value="video">撮影のご相談</option>
              <option value="sns">SNSマーケティングのご相談</option>
            </select>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required
              />
              利用規約に同意します
            </label>
          </div>
          <div>
            <button type="submit">送信</button>
            <button type="button" onClick={handleReset}>
              リセット
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact;
