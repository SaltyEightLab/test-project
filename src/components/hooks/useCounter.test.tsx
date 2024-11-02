import { useCounter } from './useCounter';
import { act, renderHook } from '@testing-library/react';

describe('useCounter', () => {
  test('should render the initial count', () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test('initialCount test', () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10 },
    });
    expect(result.current.count).toBe(10);
  });

  test('increment test', () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  test('decrement test', () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(-1);
  });
});
