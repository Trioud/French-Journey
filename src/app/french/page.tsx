const FrenchSuccessLesson = () => {
  const currentDate = new Date()
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' })
  const currentDay = currentDate.getDate()
  const currentYear = currentDate.getFullYear()

  return (
    <div className="flex w-full min-h-screen justify-center p-4 text-4xl">
      <div className="p-4 border rounded-md w-full bg-pink-300">
        <div className="text-center p-4 font-sans">
          <h1>{currentDay + ' ' + currentMonth + ' ' + currentYear}</h1>
          <h2>{`Lesson on Success`}</h2>
          <h2>{`Leçon sur la Réussite`}</h2>
        </div>
        <div className="font-mono">
          <div className="text-white-300">{`Success is the achievement of a goal or objective`}</div>
          <div className="text-red-600">{`La réussite est l'accomplissement d'un objectif ou d'un but`}</div>

          <div className="text-white-300">{`It often requires hard work, determination, and perseverance`}</div>
          <div className="text-red-600">{`Elle nécessite souvent du travail acharné, de la détermination et de la persévérance`}</div>

          <div className="text-white-300">{`Success can be measured in different ways, such as personal satisfaction or reaching a milestone`}</div>
          <div className="text-red-600">{`La réussite peut être mesurée de différentes manières, comme la satisfaction personnelle ou l'atteinte d'une étape`}</div>

          <div className="text-white-300">{`Setting clear goals and staying focused are essential for achieving success`}</div>
          <div className="text-red-600">{`Établir des objectifs clairs et rester concentré sont essentiels pour atteindre le succès`}</div>

          <div className="text-white-300">{`Success can come in various areas of life, including career, education, and personal development`}</div>
          <div className="text-red-600">{`La réussite peut intervenir dans divers domaines de la vie, y compris la carrière, l'éducation et le développement personnel`}</div>

          <div className="text-white-300">{`It's important to celebrate your successes, no matter how small they may seem`}</div>
          <div className="text-red-600">{`Il est important de célébrer vos réussites, peu importe à quel point elles peuvent sembler petites`}</div>

          <div className="text-white-300">{`Remember that success is a journey, and it often involves learning from failures along the way`}</div>
          <div className="text-red-600">{`N'oubliez pas que la réussite est un voyage et qu'elle implique souvent d'apprendre des échecs en cours de route`}</div>

          <div className="text-white-300">{`Send me what is your best success on Wechat ! `}</div>
          <div className="text-red-600">{`Envoie-moi ta meilleure réussite sur WeChat !`}</div>
        </div>
        <audio controls src={'/10-21-2023.m4a'}></audio>
      </div>
    </div>
  )
}

export default FrenchSuccessLesson
