import * as React from 'react';
import {screen, render} from '@testing-library/react';
import TestComponent from '../__fixtures__/TestComponent';

describe('usePrintText tests', () => {
  test('should return "test" text', async () => {
    render(<TestComponent text='test' delay={0} />);

    expect(screen.queryByText(/test/i)).toBeNull();
    expect(await screen.findByText(/test/i)).toBeInTheDocument();
  });

});


