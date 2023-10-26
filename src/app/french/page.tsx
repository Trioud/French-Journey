const FrenchChallengesLesson = () => {
  const currentDate = new Date()
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' })
  const currentDay = currentDate.getDate()
  const currentYear = currentDate.getFullYear()

  return (
    <div className="flex w-full min-h-screen justify-center p-4 text-4xl">
      <div className="p-4 border rounded-md w-full bg-pink-300">
        <div className="text-center p-4 font-sans">
          <h1>{currentDay + ' ' + currentMonth + ' ' + currentYear}</h1>
          <h2>{`Lesson on Challenges`}</h2>
          <h2>{`Leçon sur les Défis`}</h2>
        </div>
        <div className="font-mono">
          <div className="text-white-300">{`Challenges are obstacles or difficulties that people face`}</div>
          <div className="text-red-600">{`Les défis sont des obstacles ou des difficultés auxquels les gens sont confrontés`}</div>

          <div className="text-white-300">{`Challenges can come in various forms, such as personal, professional, or academic challenges`}</div>
          <div className="text-red-600">{`Les défis peuvent prendre diverses formes, comme des défis personnels, professionnels ou académiques`}</div>

          <div className="text-white-300">{`Overcoming challenges often requires determination, problem-solving, and resilience`}</div>
          <div className="text-red-600">{`Surmonter les défis nécessite souvent de la détermination, de la résolution de problèmes et de la résilience`}</div>

          <div className="text-white-300">{`Facing challenges can lead to personal growth and development`}</div>
          <div className="text-red-600">{`Affronter des défis peut conduire à la croissance personnelle et au développement`}</div>

          <div className="text-white-300">{`It's important to have a positive attitude when dealing with challenges`}</div>
          <div className="text-red-600">{`Il est important d'avoir une attitude positive lorsque l'on fait face à des défis`}</div>

          <div className="text-white-300">{`Share your most significant challenge and how you overcame it on WeChat, in French`}</div>
          <div className="text-red-600">{`Partagez votre défi le plus significatif et comment vous l'avez surmonté sur WeChat, en français`}</div>
        </div>
      </div>
    </div>
  )
}

export default FrenchChallengesLesson
