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
    const divRef = usePrintText('foo', 200, {once: false, startDelay: 3000})
    
    return (
        <div ref={divRef} />
    );
}
 ```
## Syntax
usePrintText(text, delay[, options])

### Parameters
* `text` String to printed.
* `delay` To delay printing. (*default 200*)
<hr/>

* `options` (*optional*)
  + `once`(*default false*)
    + `true` Will print once even after re-rendering the parent component.
    + `false` The print will re-render along with the parent component's render.
  + `startDelay` Delay before printing. (*default 500*)
