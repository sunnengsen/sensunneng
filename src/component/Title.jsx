import React from 'react'

export default function Title({title, moreStyle}) {
  return (
    <div>
        <h1 className={`text-4xl text-center font-bold  ${moreStyle}`}>{title}</h1>
    </div>
  )
}
