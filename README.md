# Use Print Text

This is a simple custom hook that prints text with an adjustable delay.

[![Node CI](https://github.com/M9lTHblu/use-print-text/actions/workflows/NodeCI.yml/badge.svg)](https://github.com/M9lTHblu/use-print-text/actions/workflows/NodeCI.yml)

## Installation

```
npm install use-print-text
```
## Usage
Hook returns ref.
```javascript
import { usePrintText } from 'use-print-text';

const Component = () => {
    const divRef = usePrintText('foo', 200)
    
    return (
        <div ref={divRef} />
    );
}
 ```
