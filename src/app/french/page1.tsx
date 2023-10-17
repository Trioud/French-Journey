const French = () => {
  const currentDate = new Date()
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' })
  const currentDay = currentDate.getDate()
  const currentYear = currentDate.getFullYear()

  return (
    <div className="flex w-full min-h-screen justify-center p-4 text-4xl">
      <div className="p-4 border rounded-md w-full bg-pink-300">
        <div className="text-center p-4">
          <h1>{currentDay + ' ' + currentMonth + ' ' + currentYear}</h1>
          <h2>Aimer et adorer ?</h2>
          <h2>Love or Enjoy ?</h2>
        </div>
        <div className="p-1">
          <p>
            {`In French, we don't use Love the same way that they do in English. When someone enjoys something
                  they say in French :`}
          </p>
          <p className="text-red-500">{`J'aime bien ça ! => I like that !`}</p>
          <p className="text-red-500">{`J'aime le Nutella ! => I like Nutella !`}</p>
          <p className="text-red-500">{`J'aime le Nutella ! => I like Nutella !`}</p>
          <br />
          <p>
            {`When we use the verb Adorer, it means that we really like something but never in a loving romantical way`}
          </p>
          <br />
          <p className="text-red-500">{`J'adore le Nutella ! => I really like Nutella !`}</p>
          <p className="text-red-500">{`J'adore ce que tu me dis. => I really like what you are telling me.`}</p>
          <br />
          <p>
            {`For romantic ways, you know how to say it, send it to me in French when you finish with this emoji 💞`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default French
