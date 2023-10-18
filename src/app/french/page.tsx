const French = () => {
  const currentDate = new Date()
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' })
  const currentDay = currentDate.getDate()
  const currentYear = currentDate.getFullYear()

  return (
    <div className="flex w-full min-h-screen justify-center p-4 text-4xl">
      <div className="p-4 border rounded-md w-full bg-pink-300">
        <div className="text-center p-4 font-sans">
          <h1>{currentDay + ' ' + currentMonth + ' ' + currentYear}</h1>
          {/* <h2>{`S'ennuyer`}</h2> */}
          <h2>{`Peluche`}</h2>
          <h2>{`Plushie`}</h2>
        </div>
        <div className="font-mono">
          <p className="text-white-300">{`Today's lesson is all about pronunciation`}</p>
          <p className="text-red-600">{`La leçon d'aujourd'hui est au sujet de la prononciation`}</p>
          <br />
          <p className="text-white-300">{`Peluche is a noun and is feminine`}</p>
          <p className="text-white-300">{`Peluche est un nom commun et est féminin`}</p>
          <p className="text-red-600">{`Example :`}</p>
          <p className="text-red-600">{`La peluche de Gloria ❤️`}</p>
          <br />
          <p className="text-white-300">{`Listen to the recording and send me on Wechat the pronunciation`}</p>
          <p className="text-red-600">{`Écoute l'enregistrement et envoie-moi la prononciation sur Wechat`}</p>
          <br />
          <audio controls src={'/peluche.m4a'}></audio>
        </div>
      </div>
    </div>
  )
}

export default French
