import * as React from 'react';
import {screen, render} from '@testing-library/react';
import {usePrintText} from '../src';
import {RefObject} from 'react';

describe('usePrintText tests', () => {
  test('should return "hello"', async () => {
    const TestComponent = (): JSX.Element => {
      const ref = usePrintText('hello World!', 0);
      return <div ref={ref as RefObject<HTMLDivElement>} />;
    };
    render(<TestComponent />);
    const div = await screen.findByText('hello World!');
    expect(div).toBeInTheDocument();
  });

  test('should return "hello"', async () => {
    const TestComponent = (): JSX.Element => {
      const ref = usePrintText('', 0);
      return <div ref={ref as RefObject<HTMLDivElement>} data-testid='test' />;
    };
    render(<TestComponent />);
    const div = await screen.findByTestId('test');
    expect(div).toBeInTheDocument();
    expect(div.textContent).toBe('');
  });
});

