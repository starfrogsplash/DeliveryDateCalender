import { useState } from 'react';

const useDate = () => {
  const [currentDate, setCurrentDate] = useState(1);

  return {
    currentDate,
    setCurrentDate
  }
};

export default useDate;
