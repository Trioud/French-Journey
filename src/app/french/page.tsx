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
          <h2>{`Feelings`}</h2>
          <h2>{`Sentiments`}</h2>
        </div>
        <div className="font-mono">
          <p className="text-white-300">{`Today's lesson is all about feelings`}</p>
          <p className="text-red-600">{`Aujourd'hui, la leçon porte sur les sentiments`}</p>
          <br />
          <p className="text-white-300">{`Feelings are important in everyday life`}</p>
          <p className="text-red-600">{`Les sentiments sont importants dans la vie quotidienne`}</p>
          <p className="text-white-300">{`They can be positive or negative`}</p>
          <p className="text-red-600">{`Ils peuvent être positifs ou négatifs`}</p>
          <br />
          <p className="text-white-300">{`Here are some examples of feelings:`}</p>
          <p className="text-red-600">{`Voici quelques exemples de sentiments :`}</p>
          <ul>
            <li className="text-white-300">
              {`Happiness - `}
              <span className="text-red-600">{`Joie`}</span>
            </li>
            <li className="text-white-300">
              {`Anger - `}
              <span className="text-red-600">{`Colère`}</span>
            </li>
            <li className="text-white-300">
              {`Sadness - `}
              <span className="text-red-600">{`Tristesse`}</span>
            </li>
            <li className="text-white-300">
              {`Fear - `}
              <span className="text-red-600">{`Peur`}</span>
            </li>
          </ul>
          <br />
          <p className="text-white-300">{`It's important to be able to express your feelings`}</p>
          <p className="text-red-600">{`Il est important de pouvoir exprimer ses sentiments`}</p>
          <p className="text-white-300">{`Now, listen to the recording and read the French red text`}</p>
          <p className="text-red-600">{`Maintenant, écoutons un enregistrement et lisons le texte français en rouge`}</p>
          <br />
          <audio controls src={'/10-20-2023.m4a'}></audio>
        </div>
      </div>
    </div>
  )
}

export default French
