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
          <h2>{`S'ennuyer`}</h2>
          <h2>{`Being Bored`}</h2>
        </div>
        <div className="p-1">
          <p>
            {`In French, when we are bored we will use the french verb S'ennuyer. This verb is in the First group`}
          </p>
          <p className="text-red-500">{`I'm bored ! => Je m'ennuie !`}</p>
          <p className="text-red-500">{`Tu t'ennuies ? => Are you bored ?`}</p>
          <p className="text-red-500">{`On s'ennuie... => We are bored`}</p>
          <br />
          <p>
            {`Send me the French translation for : I'm bored when I'm not with my boyfriend 😂😉`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default French
