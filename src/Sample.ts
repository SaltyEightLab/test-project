// 以下の型定義があります
type UseRangeProps = {
  initialValue?: number;
  min?: number;
  max?: number;
};

// この型定義を使用して、以下の要件を満たすカスタムフック「useRange」を作成してください：
// - initialValue のデフォルト値: 0
// - min のデフォルト値: 0
// - max のデフォルト値: 100
//
// フックは以下を返す必要があります：
// - value: 現在の値
// - increment: 値を1増やす関数（maxを超えない）
// - decrement: 値を1減らす関数（minを下回らない）
// - reset: 値をinitialValueに戻す関数
//
// ヒント: useStateを使用します

import { useState } from 'react';

// ここにコードを書いてください

const useRange = ({ initialValue = 0, min = 0, max = 100 }: UseRangeProps) => {
  const [value, setValue] = useState(initialValue);
  const increment = () => {
    if (value >= 100) {
      setValue(100);
    } else {
      setValue(value + 1);
    }
  };
  const decrement = () => {
    if (value <= 0) {
      setValue(value - 1);
    }
  };
  const reset = () => {
    setValue(initialValue);
  };
  return { value, increment, decrement, reset };
};
