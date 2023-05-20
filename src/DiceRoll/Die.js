import React from 'react'

export const Die = () => {
  const genRan = Math.floor(Math.random() * 10) + 1

  return <h1 className="text-3xl font-bold underline">Die Roll: {genRan}</h1>
}
