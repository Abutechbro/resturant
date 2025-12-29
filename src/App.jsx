import React, { useState } from 'react'
import Menu from './Menu'
import QRCodeGenerator from './QRCodeGenerator'

const sampleMenu = {
  name: "Cafe Example",
  sections: [
    { name: "Starters", items: [{ name: "Bruschetta", price: 6 }, { name: "Soup of the day", price: 5 }] },
    { name: "Mains", items: [{ name: "Margherita Pizza", price: 12 }, { name: "Pasta Carbonara", price: 14 }] },
    { name: "Desserts", items: [{ name: "Tiramisu", price: 7 }] }
  ]
}

export default function App() {
  const [menu] = useState(sampleMenu)
  const [table, setTable] = useState('')
  const menuJson = encodeURIComponent(JSON.stringify(menu))
  const menuUrl = `https://resturantmenuqr.vercel.app/json,${menuJson}`

  return (
    <div className="app">
      <header>
        <h1>{menu.name} — Menu</h1>
      </header>

      <main>
        <Menu menu={menu} />
        <aside className="qr-panel">
          <label className="table-input">
            Table number:
            <input value={table} onChange={(e) => setTable(e.target.value)} placeholder="e.g., 5" />
          </label>

          <QRCodeGenerator value={table ? `${menuUrl}?table=${encodeURIComponent(table)}` : menuUrl} size={200} />
          <p>Scan to open the menu on mobile.</p>
        </aside>
      </main>
    </div>
  )
}
