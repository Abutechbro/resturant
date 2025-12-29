import React from 'react'

export default function Menu({ menu }) {
  return (
    <div className="menu">
      {menu.sections.map((section, si) => (
        <section key={si}>
          <h2>{section.name}</h2>
          <ul>
            {section.items.map((item, ii) => (
              <li key={ii}>
                <span className="item-name">{item.name}</span>
                <span className="item-price">${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
