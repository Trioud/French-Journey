import { CalendarType } from './Calendar'

const CalendarDates = ({
  item,
  index,
}: {
  item: CalendarType
  index: number
}) => {
  if (index === 0) {
    const overflowDates = []
    console.log(item.dayofWeekNbr)
    for (
      let i = 1;
      i < item.dayofWeekNbr || (item.dayofWeekNbr === 0 && i < 7); // Condition added only for the Sunday = 0
      i++
    ) {
      overflowDates.push(<div />)
    }
    overflowDates.push(
      <div className="bg-zinc-50 border border-black w-[43px] h-[62px] flex flex-col justify-around items-center text-gray-950 text-2xl">
        <div>{item.dayofMonthNbr}</div>
        <div>X</div>
      </div>,
    )
    return overflowDates.map((item, key) => {
      return item
    })
  } else
    return (
      <div className="bg-zinc-50 border border-black w-[43px] h-[62px] flex flex-col justify-around items-center text-gray-950 text-2xl">
        <div>{item.dayofMonthNbr}</div>
        <div>X</div>
      </div>
    )
}

export default CalendarDates
