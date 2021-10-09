import { useStarWarsAPI } from './'
import { renderHook } from "@testing-library/react-hooks";

describe('useStarWarsAPI', () => {
  test('should return an object with keys: loading, data', () => {
    const {result} = renderHook(() => useStarWarsAPI());
    expect(result.current).toHaveProperty('loading');
    expect(result.current).toHaveProperty('data');
  });
  test('shoud set loading to true after initial call', () => {
    const {result} = renderHook(() => useStarWarsAPI());
    expect(result.current.loading).toBe(true);
  });
  test('should return data and set loading to false', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useStarWarsAPI());
    await waitForNextUpdate();
    console.log('result', result);
    console.log('waitForNextUpdate', waitForNextUpdate);
    expect(typeof result.current.data).toBe('string');
    expect(result.current.data).not.toBe(null);
    expect(result.current.loading).toBe(false);
  }, 9999);
})
