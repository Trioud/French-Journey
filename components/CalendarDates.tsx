import { CalendarType } from './Calendar'

const CalendarDates = ({
  item,
  index,
}: {
  item: CalendarType
  index: number
}) => {
  const date = new Date()
  if (
    date.toISOString().slice(0, 10) ===
    item.currentDate.toISOString().slice(0, 10)
  ) {
    console.log(date.toISOString() + '//' + item.currentDate.toISOString())
    console.log(item.dayofWeekstr)
  }
  if (index === 0) {
    const overflowDates = []
    for (
      let i = 1;
      i < item.dayofWeekNbr || (item.dayofWeekNbr === 0 && i < 7); // Condition added only for the Sunday = 0
      i++
    ) {
      overflowDates.push(<div />)
    }
    overflowDates.push(
      <div className="bg-zinc-50 border border-black w-[43px] h-[62px] flex flex-col justify-around items-center text-gray-950 text-2xl relative">
        {date.getDate() === item.dayofMonthNbr &&
          date.getMonth() === item.currentDate.getMonth() && (
            <div className="absolute top-[-10px] w-20 h-20 border-2 border-red-500 rounded-full z-10" />
          )}
        <div>{item.dayofMonthNbr}</div>
        <div className="text-lg">{item.icon}</div>
      </div>,
    )
    return overflowDates.map((item, key) => {
      return item
    })
  } else
    return (
      <>
        <div className="bg-zinc-50 border border-black w-[43px] h-[62px] flex flex-col justify-around items-center text-gray-950 text-2xl relative">
          {date.getDate() === item.dayofMonthNbr &&
            date.getMonth() === item.currentDate.getMonth() && (
              <div className="absolute top-[-10px] w-20 h-20 border-2 border-red-500 rounded-full z-10" />
            )}
          <div>{item.dayofMonthNbr}</div>
          <div className="text-lg">{item.icon}</div>
        </div>
      </>
    )
}

export default CalendarDates
