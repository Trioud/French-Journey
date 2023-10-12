import Link from 'next/link'

const Home = () => {
  return (
    <section className="h-screen w-screen flex flex-col justify-center items-center gap-3">
      <div className="text-6xl m-6 text-center">Happy Birthday my love !</div>
      <div className="text-4xl text-center">
        I made a little calendar for you to remember all our incredible love
        story
      </div>
      <div className="text-3xl text-center">
        Try to guess what the emojis mean for each date !
      </div>
      <div className="text-3xl text-center">
        Press your birthday to find a secret :D
      </div>
      <div className="text-3xl text-center">{`Let's go back in time, back to March 30th the first time I met the most wonderful woman ever : You !`}</div>
      <Link
        href={'/calendar'}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-3xl px-4 py-10 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Click me to go back in time !!
      </Link>
    </section>
  )
}

export default Home
