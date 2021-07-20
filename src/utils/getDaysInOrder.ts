import { format } from "date-fns";
import getDaysInMonth from 'date-fns/getDaysInMonth'
import startOfMonth from 'date-fns/startOfMonth'

  const getDaysInOrder = (today: number | Date) => {
    const daysInMonth = getDaysInMonth(today)
    const startDayOfMonth = parseInt(format(startOfMonth(today), "i")) - 1

    const numOfDays = [...new Array(daysInMonth)]

    var rowOfDays: any[][] = [];
    var currentResultIndex = 0;
    for (var i = 0; i < numOfDays.length + startDayOfMonth; i++) {
      const isBeforeStartDay = i < startDayOfMonth;

      if (i % 7 === 0) {
        if (i !== 0) currentResultIndex++;

        let validDay: any

        if (rowOfDays[rowOfDays.length - 1]) {
          const lastDayfromPreviousRow = rowOfDays[rowOfDays.length - 1][6]
          validDay = lastDayfromPreviousRow + 1
        }

        rowOfDays.push([validDay ? validDay : '']);
      } else {

        rowOfDays[currentResultIndex].push(isBeforeStartDay ? '' : (i + 1) - startDayOfMonth);
      }
    }

    return rowOfDays;
  }

  export {
    getDaysInOrder
  }