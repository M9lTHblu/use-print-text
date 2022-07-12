import useRenderCount from '../src/useRenderCount';
import {renderHook} from '@testing-library/react';

describe('should return the number of renders', () => {

  test('should return renders count', () => {
    const {result, rerender} = renderHook(() => useRenderCount())
    rerender()
    rerender()
    expect(result.current).toBe(3)
    rerender()
    rerender()
    expect(result.current).toBe(5)
  })

})
