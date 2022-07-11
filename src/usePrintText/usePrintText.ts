import {RefObject, useRef} from 'react';

export const usePrintText = (
    text: string, delay: number): RefObject<HTMLElement> => {
  const ref = useRef<HTMLElement>(null);
  let index = 0;

  const intervalID = setInterval(() => {
    if (index >= text.length) {
      clearInterval(intervalID);
    } else {
      if (ref.current) {
        ref.current.textContent += text[index];
      }
      index += 1;
    }

  }, delay);

  return ref;
};

