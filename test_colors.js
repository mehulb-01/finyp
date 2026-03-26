const fs = require('fs');
const cssPath = 'src/index.css';
let css = fs.readFileSync(cssPath, 'utf8');

const themeUpdates = `
@theme {
  --color-primary: #10B981;

  /* Map Blue to Emerald */
  --color-blue-50: #ECFDF5;
  --color-blue-100: #D1FAE5;
  --color-blue-200: #A7F3D0;
  --color-blue-300: #6EE7B7;
  --color-blue-400: #34D399;
  --color-blue-500: #10B981;
  --color-blue-600: #059669;
  --color-blue-700: #047857;
  --color-blue-800: #065F46;
  --color-blue-900: #064E3B;

  /* Map Indigo to Purple */
  --color-indigo-50: #FAF5FF;
  --color-indigo-100: #F3E8FF;
  --color-indigo-200: #E9D5FF;
  --color-indigo-300: #D8B4FE;
  --color-indigo-400: #C084FC;
  --color-indigo-500: #A855F7;
  --color-indigo-600: #9333EA;
  --color-indigo-700: #7E22CE;
  --color-indigo-800: #6B21A8;
  --color-indigo-900: #581C87;

  /* Override Grays for ultra-dark purple-black background */
  --color-gray-950: #030308;
  --color-gray-900: #0A0A10;
  --color-gray-800: #12121D;
  --color-gray-700: #1E1E2C;
  --color-gray-600: #2D2D40;
}
`;

css = css.replace(/@theme \{[^}]+\}/, themeUpdates.trim());
fs.writeFileSync(cssPath, css);
console.log('CSS updated successfully.');
