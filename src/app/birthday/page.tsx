'use client'
import React, { useState, useEffect } from 'react'

import ConfettiExplosion from 'react-confetti-explosion'

const Birthday = () => {
  const [time, setTime] = useState(false)
  useEffect(() => {
    const interval = setInterval(
      () => {
        setTime(!time)
      },
      Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    )
    return () => clearInterval(interval)
  }, [time])
  return (
    <section className="flex flex-col h-screen w-screen justify-center items-center">
      {time && <ConfettiExplosion />}
      {time && <ConfettiExplosion />}
      {time && <ConfettiExplosion />}
      <div className="pb-3 text-center">
        <div className="text-4xl">Happy Birthday !!</div>
        <div className="text-4xl">Joyeux Anniversaire !!</div>
        <div className="text-4xl">生日快乐 !!</div>
      </div>
    </section>
  )
}

export default Birthday
