import {useEffect, useRef} from 'react';
import useRenderCount from './useRenderCount';

export interface Options {
  once?: boolean;
  startDelay?: number;
}

export const usePrintText = (
    text: string,
    delay = 200,
    options: Options = {once: false, startDelay: 500},
): any => {

  const textRef = useRef<HTMLElement>(null);
  const count = useRenderCount();

  useEffect(() => {
    let index = 0;
    let intervalId: NodeJS.Timer;

    if (textRef.current !== null) {
      textRef.current.textContent = '';
    }

    if (options.once) {
      if (count > 1) {
        index = text.length;
        options.startDelay = 0;
        if (textRef.current !== null) {
          textRef.current.textContent = text;
        }
      }
    }

    const timeId = setTimeout(() => {
      intervalId = setInterval(() => {
        if (index >= text.length - 1) {
          if (textRef.current !== null) {
            textRef.current.textContent = text;
          }
          clearInterval(intervalId);
        } else {
          if (textRef.current !== null) {
            textRef.current.textContent += text[index];
            index += 1;
          }
        }
      }, delay);
    }, options.startDelay);

    return () => {
      clearTimeout(timeId);
      clearInterval(intervalId);
    };
  });

  return textRef;
};

