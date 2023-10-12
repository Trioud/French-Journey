'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import ConfettiExplosion from 'react-confetti-explosion'

const Birthday = () => {
  const [time, setTime] = useState(false)
  const [amount, setAmount] = useState(0)
  const [gift, setGift] = useState(20)

  useEffect(() => {
    if (amount < 5) {
      const interval = setInterval(
        () => {
          setTime(!time)
          setAmount(amount + 1)
        },
        Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
      )
      return () => clearInterval(interval)
    } else {
      setTime(false)
    }
  }, [time, amount])
  return (
    <>
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
      <section className="flex flex-col h-screen w-screen justify-center items-center">
        <div className="pb-3 text-center">
          <div className="text-4xl mb-3">Turn the music up !!</div>
          <audio controls src="/Lucky.mp3">
            Your browser does not support the
            <code>audio</code> element.
          </audio>
          <div className="text-2xl">Scroll down for a little surprise...</div>
        </div>
      </section>
      <section className="flex flex-col h-screen w-screen justify-center items-center">
        <div className="pb-3 text-center">
          {gift > 0 ? (
            <div className="text-4xl">
              Press on the gift 20 times to retrieve the secret !!
            </div>
          ) : (
            <div className="text-4xl">YOU OPENED THE GIFT !!!!</div>
          )}
          {gift > 0 ? (
            <div>
              <div className="flex justify-center">
                <Image
                  width={300}
                  height={300}
                  src="/gift.png"
                  alt="gift"
                  onClick={() => setGift(gift - 1)}
                />
              </div>
              <div className="text-6xl">{gift} to GO</div>
            </div>
          ) : (
            <>
              <div className="text-4xl">
                Send me this secret password to unlock a secret VIDEO
              </div>
              <div className="text-7xl text-pink-400">GLORIAISTHEBEST</div>
            </>
          )}
        </div>
      </section>
    </>
  )
}

export default Birthday
