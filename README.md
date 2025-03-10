## UI Kit (Demo)
A modular UI Kit built with React, TypeScript, and SCSS.

### Installation
Clone the repository and install dependencies:
```
npm install
```

### Usage
Import and use components in your project:
Button Component
```
import { Button } from "./components/Button";

<Button className="button button--primary" onClick={() => alert("Clicked!")}>Click Me</Button>;
```

InputRange Component
```
import { InputRange } from "./components/InputRange";

<InputRange className="input input--range" value={50} onChange={(val) => console.log(val)} />;
```

#### Styling
This project uses SCSS for styling. All styles are located in the src/styles directory. To customize styles, modify the SCSS files:
- _variables.scss – Global variables (colors, sizes, etc.)

- _mixins.scss – Reusable mixins

- _global.scss – Global styles

- _buttons.scss – Button styles

- _inputs.scss – Input styles

To apply styles, ensure main.scss is imported in your main entry file:
```
import "./styles/main.scss";
```

### Development
Start the development server with Webpack:
```
npm run dev
```

### Build
To create a production build:
```
npm run build
```

### Lint & Format
Check code for linting errors:
```
npm run lint
```

Format code with Prettier:
```
npm run format
```

### License
MIT