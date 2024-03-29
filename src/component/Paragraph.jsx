import React from 'react'

export default function Paragraph({paragraph, moreStyle}) {
  return (
    <div>
        {/* props style paragraph */}
        <p className={`text-center text-xl text-gray-800 font-medium ${moreStyle}`}>{paragraph}</p>

    </div>
  )
}
