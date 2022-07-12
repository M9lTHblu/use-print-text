import {useEffect, useRef} from 'react';

const useRenderCount = (): number => {
  const count = useRef<number>(1)
  useEffect(() => {
    count.current += 1;
  })

  return count.current;
}

export default useRenderCount
