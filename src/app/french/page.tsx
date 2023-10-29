const FrenchTravelLesson = () => {
  const currentDate = new Date()
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' })
  const currentDay = currentDate.getDate()
  const currentYear = currentDate.getFullYear()

  return (
    <div className="flex w-full min-h-screen justify-center p-4 text-4xl">
      <div className="p-4 border rounded-md w-full bg-pink-300">
        <div className="text-center p-4 font-sans">
          <h1>{currentDay + ' ' + currentMonth + ' ' + currentYear}</h1>
          <h2>{`Lesson on Traveling`}</h2>
          <h2>{`Leçon sur les Voyages`}</h2>
        </div>
        <div className="font-mono">
          <div className="text-white-300">{`Traveling is the act of going from one place to another, typically over a considerable distance`}</div>
          <div className="text-red-600">{`Voyager, c'est l'acte de se déplacer d'un endroit à un autre, généralement sur une longue distance`}</div>

          <div className="text-white-300">{`Traveling allows people to explore new destinations, experience different cultures, and create lasting memories`}</div>
          <div className="text-red-600">{`Les voyages permettent aux personnes de découvrir de nouvelles destinations, de vivre différentes cultures et de créer des souvenirs durables`}</div>

          <div className="text-white-300">{`When traveling, it's essential to plan and prepare, including booking accommodation, transportation, and researching the destination`}</div>
          <div className="text-red-600">{`Lorsque l'on voyage, il est essentiel de planifier et de se préparer, y compris la réservation de l'hébergement, des transports, et la recherche sur la destination`}</div>

          <div className="text-white-300">{`Traveling can be a source of personal growth, broadening one's horizons and gaining new perspectives`}</div>
          <div className="text-red-600">{`Voyager peut être une source de croissance personnelle, élargissant ses horizons et acquérant de nouvelles perspectives`}</div>

          <div className="text-white-300">{`Share your most memorable travel experience and what you learned from it on WeChat, in French`}</div>
          <div className="text-red-600">{`Partagez votre expérience de voyage la plus mémorable et ce que vous avez appris grâce à elle sur WeChat en français`}</div>
        </div>
      </div>
    </div>
  )
}

export default FrenchTravelLesson
