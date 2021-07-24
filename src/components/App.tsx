
import Calender from './Calender'
import calender from '../images/calendar.svg'
import van from '../images/van.svg'
import useModal from '../customhooks/useModal'
import useDate from '../customhooks/useDate'
import { format } from "date-fns";

const App = (): JSX.Element => {
  const { isShowing, toggle } = useModal()
  const { currentDate, setCurrentDate } = useDate()

  const today = new Date()
  today.setDate(currentDate)
  const dateFormatted = format(today, "E MMMM d").toString();

  return (
    <div className="flex h-screen">
      <div className="m-auto bg-grey-100 p-4 w-96">
        <p className="text-brand-blue-500 font-gt-pressura-bold text-4xl">Choose your delivery</p>
        <div className="flex mt-2">
          <div className="text-brand-blue-500 font-gt-pressura-bold text-4xl">day</div>
          <div className="cl text-xl my-1 flex items-center ml-6 text-brand-blue-500 font-gt-pressura-regular bg-grey-200 px-2 rounded">Delivery is always free</div>
        </div>

        <div className="flex flex-row bg-brand-white rounded h-18 mt-8 w-full justify-between shadow-md " >

          <div className="flex flex-col px-4 justify-center">
            <p className="text-lg text-brand-blue-500 font-gt-pressura-regular">{dateFormatted}</p>
            <div className="flex flex-row space-x-3 bg-success-green-100 items-center px-2 rounded">
              <img src={van} alt="van " className='h-4 w-6' />
              <p className="text-brand-blue-500 font-gt-pressura-regular">Earliest delivery</p>
            </div>
          </div>

          <div className="relative rounded-l-full flex flex-col items-center rounded ">

            <div className="flex h-20 w-22">
              <div
                id='left'
                className="h-full bg-brand-blue-200 w-9 -mr-2"
                style={{ "borderTopLeftRadius": "50%", "borderBottomLeftRadius": "50%" }}
              ></div>
              <div id='right' className="flex-1 flex flex-col h-full bg-brand-blue-200 rounded justify-center items-center">
                  <div className="relative bg-white h-6.5 w-7 rounded">
                    <img src={calender} alt="calender" className=" -mt-1" />
                    <div className="absolute w-5 text-center top-1 left-1 text-brand-blue-500 flex justify-center">
                            {currentDate}
                      </div>
                  </div>
                  <button
                    className="bg-transparent font-thin font-gt-pressura-regular text-brand-blue-500 rounded inline-flex items-center"
                    onClick={toggle}
                  >
                    <span className="border-b-2 border-brand-blue-500">Change</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Calender
        isShowing={isShowing}
        hide={toggle}
        currentDate={currentDate}
        setDate={setCurrentDate}
      />
    </div>
  );
}

export default App;
