## UI Kit (Demo)
A simple UI Kit built with React and TypeScript.

### Installation
```sh
npm install
```
### Usage
Button Component
```
import { Button } from "./components/Button";

<Button label="Click Me" onClick={() => alert("Clicked!")} />;
```

InputRange Component
```
import { InputRange } from "./components/InputRange";

<InputRange value={50} onChange={(val) => console.log(val)} />;
```

### Development
```
npm run dev
```

### License
MIT