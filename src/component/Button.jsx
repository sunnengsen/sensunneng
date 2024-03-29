import React from 'react'

export default function Button({buttons, moreStyle, onClicks}) {
  return (
    <div>
        <button onClick={onClicks} className={` border-2 border-white rounded-md bg-gradient-to-r from-blue-500 to-purple-500 ${moreStyle}`}>
            {buttons}
        </button>
    </div>
  )
}
