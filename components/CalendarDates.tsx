import { CalendarType } from './Calendar'
import Link from 'next/link'

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
    if (
      !(
        date.getDate() === item.dayofMonthNbr &&
        date.getMonth() === item.currentDate.getMonth()
      )
    )
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
    else
      overflowDates.push(
        <Link
          href={'french'}
          className="bg-zinc-50 border border-black w-[43px] h-[62px] flex flex-col justify-around items-center text-gray-950 text-2xl relative"
        >
          <div className="bg-zinc-50 border border-black w-[43px] h-[62px] flex flex-col justify-around items-center text-gray-950 text-2xl relative">
            {date.getDate() === item.dayofMonthNbr &&
              date.getMonth() === item.currentDate.getMonth() && (
                <div className="absolute top-[-10px] w-20 h-20 border-2 border-red-500 rounded-full z-10" />
              )}
            <div>{item.dayofMonthNbr}</div>
            <div className="text-lg">{item.icon}</div>
          </div>
        </Link>,
      )
    return overflowDates.map((item, key) => {
      return item
    })
  } else if (
    date.getDate() === item.dayofMonthNbr &&
    date.getMonth() === item.currentDate.getMonth()
  ) {
    return (
      <>
        <Link
          href={'french'}
          className="bg-zinc-50 border border-black w-[43px] h-[62px] flex flex-col justify-around items-center text-gray-950 text-2xl relative"
        >
          {date.getDate() === item.dayofMonthNbr &&
            date.getMonth() === item.currentDate.getMonth() && (
              <div className="absolute top-[-10px] w-20 h-20 border-2 border-red-500 rounded-full z-10" />
            )}
          <div>{item.dayofMonthNbr}</div>
          <div className="text-lg">{item.icon}</div>
        </Link>
      </>
    )
  } else {
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
}

export default CalendarDates
