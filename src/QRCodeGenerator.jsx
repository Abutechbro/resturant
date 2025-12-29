import React from 'react'
import QRCode from "react-qr-code";

export default function QRCodeGenerator({ value, size = 128 }) {
  return (
    <div className="qr">
      <QRCode value={value} size={size} />
    </div>
  )
}
