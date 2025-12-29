# Restaurant Menu with QR

A minimal Vite + React app that displays a restaurant menu and generates a QR code linking to the menu (encoded as data URL).

Quick start (Windows / cross-platform):

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser. Scan the QR code with a phone to view the menu JSON.

Notes:
- The QR encodes a data URL containing the JSON menu for demo purposes. In production, host the menu on a real URL and point the QR to it.
- To change the menu, edit `src/App.jsx`'s `sampleMenu`.
