import { format } from "date-fns";
import { useState } from 'react';
import { getDaysInOrder } from './utils/getDaysInOrder'

const Calender = ({ isShowing, hide, currentDate, setDate }: { isShowing: Boolean, hide: Function, currentDate: Number, setDate: Function }):JSX.Element | null => {
  const [selectedDay, setSelectedDay] = useState(currentDate)
  const today = Date.now()
  const dateFormatted = format(today, "MMMM yyyy").toString();

  const weekdays = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

  const tableSelectHandler = (e: any) => {
    setSelectedDay(parseInt(e.target.dataset.value))
  }

  const changeDateHandler = () => {
    setDate(selectedDay)
    hide()
  }

  return isShowing ? (
    <>
      <div className="m-auto flex-col justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-white w-80 h-80">
        <div className="text-lg flex justify-center pb-3 text-brand-blue-500 font-gt-pressura-bold mt-4">{dateFormatted}</div>
        <div className="flex flex-col items-center">
          <table className="border-separate">
            <thead>
              <tr>
                {weekdays.map((day: string, i: number) => (
                  <th key={i} className="px-2 text-brand-blue-500 font-gt-pressura-mono">
                    {day}
                  </th>
                ))
                }
              </tr>
            </thead>
            <tbody>
              {getDaysInOrder(today).map((week: number[], i: number) =>
              (<tr key={i}>{week.map((day: number, i: number) => <th key={i} className={`font-gt-pressura-regular px-2 ${selectedDay === day ? 'bg-brand-red-300 text-brand-white' : ''} ${day ? 'border-2' : ``} ${((i === 1 || i === 4 || i === 5) && day) ? `cursor-not-allowed bg-grey-200 text-grey-400` : `cursor-pointer border-brand-red-300 text-brand-red-300`}`}
                onClick={((i === 1 || i === 4 || i === 5) && day) ? undefined : (e) => tableSelectHandler(e)}
                data-value={day}
              >{day}</th>)}</tr>))
              }
            </tbody>
          </table>
        </div>
        <div className="flex flex-row mt-3 justify-center h-10 space-x-1">
          <button
            className="text-sm font-thin leading-4 flex justify-center flex-col bg-transparent hover:text-gray-900 font-gt-pressura-bold text-grey-400 py-2 px-4 rounded inline-flex items-center "
            onClick={(e) => hide(e)}
          >
            <span>Cancel,</span>
            <span>DON'T CHANGE</span>
          </button>
          <div
            className="text-sm flex items-center cursor-pointer shadow-md bg-transparent border-2 border-brand-red-300 hover:bg-brand-red-200 hover:text-brand-white font-gt-pressura-bold text-brand-red-300 px-2 rounded"
            onClick={() => changeDateHandler()}
          >
            CHANGE DATE
          </div>
        </div>
      </div>
      <div
        className="opacity-70 fixed inset-0 z-40 bg-black"
        onClick={(e) => hide(e)}
      ></div>
    </>

  ) : null

}

export default Calender
