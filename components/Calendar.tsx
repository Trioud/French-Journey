'use client'

import { useCallback, useEffect, useState } from 'react'
import CalendarDates from './CalendarDates'
import data from '../data/dates.json'

export interface CalendarType {
  currentDate: Date
  dayofWeekstr: string
  dayofWeekNbr: number
  dayofMonthNbr: number
  icon?: string
}

export default function Calendar() {
  const getDaysOfMonth = (year: number, month: number): CalendarType[] => {
    const days = []
    const lastDayOfMonth = new Date(year, month, 0)

    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
      const currentDate = new Date(year, month - 1, day)
      const dayOfWeekNumber = currentDate.getDay()
      const dayofMonthNumber = currentDate.getDate()
      const dayNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ]
      const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]
      const monthStr = monthNames[month - 1]
      // console.log(monthStr)
      // console.log(data[monthStr][dayofMonthNumber.toString()])
      // console.log(data['January'][1])
      const dayOfWeek = dayNames[dayOfWeekNumber]
      days.push({
        currentDate: currentDate,
        dayofWeekstr: dayOfWeek,
        dayofWeekNbr: dayOfWeekNumber,
        dayofMonthNbr: dayofMonthNumber,
        icon: data[monthStr][dayofMonthNumber.toString()],
      })
    }
    return days
  }
  const generateCalendar = useCallback((month?: number) => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const currentMonth = month != undefined ? month : currentDate.getMonth() + 1 // Month is zero-based

    const calendarValues = getDaysOfMonth(currentYear, currentMonth)
    return calendarValues
  }, [])

  const date = new Date()
  const [calendar, setCalendar] = useState(generateCalendar())
  const [month, setMonth] = useState(date.getMonth() + 1)

  useEffect(() => {
    const generatedCalendar = generateCalendar(month)
    setCalendar(generatedCalendar)
  }, [month, generateCalendar])

  const changeMonth = (value: number) => {
    let newMonth = month + value
    if (newMonth > 12) newMonth = 1
    else if (newMonth < 0) newMonth = 11
    setMonth(newMonth)
  }

  generateCalendar()
  return (
    <main className="mt-[5px] h-full overflow-hidden bg-white rounded-t-lg">
      <div className="bg-red-600 h-16 border border-red-500 rounded-t-lg capitalize flex justify-between items-center text-3xl">
        <button
          onClick={() => {
            changeMonth(-1)
          }}
        >{`<`}</button>
        {calendar[0].currentDate
          .toLocaleDateString('fr-FR', { month: 'long' })
          .toUpperCase() +
          '      ' +
          date.getFullYear()}
        <button
          onClick={() => {
            changeMonth(1)
          }}
        >{`>`}</button>
      </div>
      <div className="px-6 py-3 grid grid-cols-7 grid-rows-6 w-full justify-items-center gap-2">
        <div className="bg-zinc-50w-[43px] h-[30px] font text-center text-gray-950 text-2xl">
          L
        </div>
        <div className="bg-zinc-50w-[43px] h-[30px] font text-center text-gray-950 text-2xl">
          M
        </div>
        <div className="bg-zinc-50w-[43px] h-[30px] font text-center text-gray-950 text-2xl">
          M
        </div>
        <div className="bg-zinc-50w-[43px] h-[30px] font text-center text-gray-950 text-2xl">
          J
        </div>
        <div className="bg-zinc-50w-[43px] h-[30px] font text-center text-gray-950 text-2xl">
          V
        </div>
        <div className="bg-zinc-50w-[43px] h-[30px] font text-center text-gray-950 text-2xl">
          S
        </div>
        <div className="bg-zinc-50w-[43px] h-[30px] font text-center text-gray-950 text-2xl">
          D
        </div>
        {calendar.map((item, index) => {
          return <CalendarDates key={index} item={item} index={index} />
        })}
      </div>
    </main>
  )
}
