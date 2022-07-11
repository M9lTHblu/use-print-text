# Use Print Text

This is a simple custom hook that prints text with an adjustable delay.

## Installation

```
nmp install use-print-text
```
## Usage
Hook returns ref.
```
import { usePrintText } from 'use-print-text';

const Components = () => {
    const divRef = usePrintText('foo', 200)
    
    return (
        <div ref={divRef} />
    );
}
 ```
