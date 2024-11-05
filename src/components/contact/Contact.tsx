import React, { useState } from 'react';

type FormData = {
  fullName: string;
  email: string;
  question: string;
  terms: boolean;
};

type FormErrors = {
  fullName?: string;
  email?: string;
  question?: string;
  terms?: string;
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    question: '',
    terms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // バリデーション関数
  const validateField = (name: string, value: string | boolean): string => {
    switch (name) {
      case 'fullName':
        if (!value) return '名前を入力してください';
        if (typeof value === 'string' && value.length < 2)
          return '名前は2文字以上で入力してください';
        if (typeof value === 'string' && value.length > 50)
          return '名前は50文字以内で入力してください';
        return '';

      case 'email':
        if (!value) return 'メールアドレスを入力してください';
        if (
          typeof value === 'string' &&
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
        ) {
          return '有効なメールアドレスを入力してください';
        }
        return '';

      case 'question':
        if (!value) return 'お問い合わせ内容を選択してください';
        return '';

      case 'terms':
        if (!value) return '利用規約に同意してください';
        return '';

      default:
        return '';
    }
  };

  // フィールドごとのバリデーション実行
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) {
        newErrors[key as keyof FormErrors] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const inputValue =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: inputValue,
    }));

    // 入力時のバリデーション
    const error = validateField(name, inputValue);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // すべてのフィールドをタッチ済みにする
    const allTouched = Object.keys(formData).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    );
    setTouched(allTouched);

    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      question: '',
      terms: false,
    });
    setErrors({});
    setTouched({});
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
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="fullName">お名前</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-invalid={!!errors.fullName && touched.fullName}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            />
            {errors.fullName && touched.fullName && (
              <span id="fullName-error" role="alert" className="error">
                {errors.fullName}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="email">メールアドレス</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-invalid={!!errors.email && touched.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && touched.email && (
              <span id="email-error" role="alert" className="error">
                {errors.email}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="question">お問い合わせ内容</label>
            <select
              id="question"
              name="question"
              value={formData.question}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-invalid={!!errors.question && touched.question}
              aria-describedby={errors.question ? 'question-error' : undefined}
            >
              <option value="">お問い合わせ内容を選択してください</option>
              <option value="dev">開発案件のご相談</option>
              <option value="video">撮影のご相談</option>
              <option value="sns">SNSマーケティングのご相談</option>
            </select>
            {errors.question && touched.question && (
              <span id="question-error" role="alert" className="error">
                {errors.question}
              </span>
            )}
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                aria-invalid={!!errors.terms && touched.terms}
                aria-describedby={errors.terms ? 'terms-error' : undefined}
              />
              利用規約に同意します
            </label>
            {errors.terms && touched.terms && (
              <span id="terms-error" role="alert" className="error">
                {errors.terms}
              </span>
            )}
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
