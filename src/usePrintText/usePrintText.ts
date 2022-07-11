import {MutableRefObject, useRef} from 'react';

export const usePrintText = (
    text: string, delay: number): MutableRefObject<any> => {
  const ref = useRef<HTMLElement>(null!);
  let index: number = 0;

  const intervalID = setInterval(() => {
    if (index >= text.length) {
      clearInterval(intervalID);
    } else {
      ref.current.textContent += text[index];
      index += 1;
    }

  }, delay);

  return ref;
};

