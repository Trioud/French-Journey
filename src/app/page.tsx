import Calendar from '../../components/Calendar'

export default function Home() {
  return (
    <main className="bg-blue-200 min-h-screen flex items-center justify-center">
      <div
        className="bg-white rounded-lg shadow-lg w-[390px] h-[844px]"
        style={{ backgroundImage: 'url("/background.jpeg")' }}
      >
        <section className="w-full h-full flex flex-col">
          <h1 className="text-2xl text-center p-8 text-[#0047FF]">
            Notre histoire d&apos;amour
          </h1>
          <Calendar />
        </section>
      </div>
    </main>
  )
}
