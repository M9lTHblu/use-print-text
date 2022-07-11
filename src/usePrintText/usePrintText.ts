import {MutableRefObject, useRef} from 'react';

interface PrintTextProps{
  text: string;
  delay: number
}

export const usePrintText = ({text, delay}: PrintTextProps): MutableRefObject<HTMLElement> => {
  const ref = useRef<HTMLElement>(null!)
  let index: number = 0;

  const intervalID = setInterval(() => {
    if (index >= text.length ) {
      clearInterval(intervalID)
    }
    else {
      ref.current.textContent += text[index]
      index += 1
    }

  }, delay)

  return ref
}

