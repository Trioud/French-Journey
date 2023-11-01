const FrenchPetsLesson = () => {
  const currentDate = new Date()
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' })
  const currentDay = currentDate.getDate()
  const currentYear = currentDate.getFullYear()

  return (
    <div className="flex w-full min-h-screen justify-center p-4 text-4xl">
      <div className="p-4 border rounded-md w-full bg-pink-300">
        <div className="text-center p-4 font-sans">
          <h1>{currentDay + ' ' + currentMonth + ' ' + currentYear}</h1>
          <h2>{`Lesson on Pets`}</h2>
          <h2>{`Leçon sur les Animaux de Compagnie`}</h2>
        </div>
        <div className="font-mono">
          <div className="text-white-300">{`Pets are animals kept for companionship and enjoyment`}</div>
          <div className="text-red-600">{`Les animaux de compagnie sont des animaux gardés pour la compagnie et le plaisir`}</div>

          <div className="text-white-300">{`Common pets include dogs, cats, birds, fish, and small mammals like hamsters and guinea pigs`}</div>
          <div className="text-red-600">{`Les animaux de compagnie courants comprennent les chiens, les chats, les oiseaux, les poissons et les petits mammifères comme les hamsters et les cochons d'Inde`}</div>

          <div className="text-white-300">{`Pets provide companionship, love, and can improve mental and physical well-being for their owners`}</div>
          <div className="text-red-600">{`Les animaux de compagnie offrent de la compagnie, de l'amour et peuvent améliorer le bien-être mental et physique de leurs propriétaires`}</div>

          <div className="text-white-300">{`Taking care of a pet includes providing food, shelter, and regular veterinary care`}</div>
          <div className="text-red-600">{`Prendre soin d'un animal de compagnie comprend la fourniture de nourriture, d'un abri et de soins vétérinaires réguliers`}</div>

          <div className="text-white-300">{`What is your favorite animal ?`}</div>
          <div className="text-red-600">{`Quel est votre animal préféré ?`}</div>
          <audio controls src={'/11-02-2023.m4a'}></audio>
        </div>
      </div>
    </div>
  )
}

export default FrenchPetsLesson
