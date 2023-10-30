const FrenchHalloweenLesson = () => {
  const currentDate = new Date()
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' })
  const currentDay = currentDate.getDate()
  const currentYear = currentDate.getFullYear()

  return (
    <div className="flex w-full min-h-screen justify-center p-4 text-4xl">
      <div className="p-4 border rounded-md w-full bg-pink-300">
        <div className="text-center p-4 font-sans">
          <h1>{currentDay + ' ' + currentMonth + ' ' + currentYear}</h1>
          <h2>{`Lesson on Halloween`}</h2>
          <h2>{`Leçon sur Halloween`}</h2>
        </div>
        <div className="font-mono">
          <div className="text-white-300">{`Halloween is a popular holiday celebrated on October 31st`}</div>
          <div className="text-red-600">{`Halloween est une fête populaire célébrée le 31 octobre`}</div>

          <div className="text-white-300">{`It is known for its traditions, including dressing up in costumes, carving pumpkins, and going trick-or-treating`}</div>
          <div className="text-red-600">{`Elle est connue pour ses traditions, notamment se déguiser, sculpter des citrouilles et faire du porte-à-porte pour demander des bonbons`}</div>

          <div className="text-white-300">{`Halloween is a time for spooky decorations and haunted houses, creating a sense of thrill and excitement`}</div>
          <div className="text-red-600">{`Halloween est une période de décorations effrayantes et de maisons hantées, créant une ambiance d'excitation et de frisson`}</div>

          <div className="text-white-300">{`The holiday originated from ancient Celtic festivals, such as Samhain, and has evolved over the centuries`}</div>
          <div className="text-red-600">{`La fête trouve son origine dans d'anciens festivals celtiques, tels que Samhain, et a évolué au fil des siècles`}</div>

          <div className="text-white-300">{`Share your favorite Halloween memory or costume on WeChat, in both French`}</div>
          <div className="text-red-600">{`Partagez votre meilleur souvenir d'Halloween ou votre costume sur WeChat, en français`}</div>
          <audio controls src={'/31-10-2023.m4a'}></audio>
        </div>
      </div>
    </div>
  )
}

export default FrenchHalloweenLesson
