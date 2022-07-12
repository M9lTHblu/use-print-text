import {usePrintText} from '../src';
import { Options } from '../src/usePrintText';

const TestComponent = ({text, delay, options}: {text: string, delay: number, options?: Options}) => {
  const divRef = usePrintText(text, delay, options);

  return <div ref={divRef} data-testid='divWithRef' />
};

export default TestComponent;
