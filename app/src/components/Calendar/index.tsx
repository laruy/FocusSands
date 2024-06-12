import { useCallback, useMemo, useState } from 'react';
import { subDays, addDays } from 'date-fns';
import { Calendar } from 'react-native-calendars';
import { formatDateYYYYmmDD } from '../../shared/utils/date';
import { CalendarDates } from '../../shared/interfaces/Calendar';

const INITIAL_DATE = formatDateYYYYmmDD(subDays(new Date(), 1));
const FINAL_DATE = formatDateYYYYmmDD(new Date());
const MAX_DATE = formatDateYYYYmmDD(addDays(new Date(), 1));

interface CalendarProps {
  onFilter: (dates: CalendarDates) => void;
}

export default function CalendarComponent({ onFilter }: CalendarProps) {
  const [date, setDate] = useState<CalendarDates>({
    initialDate: INITIAL_DATE,
    finalDate: FINAL_DATE,
  });
  const [initialDateForMoment, setInitialDateForMoment] = useState(false);
  const onDayPress = useCallback(
    (day: { dateString: string }) => {
      if (initialDateForMoment) {
        setInitialDateForMoment(false);
        setDate((prevState) => ({
          ...prevState,
          initialDate: day.dateString,
        }));
      } else {
        setInitialDateForMoment(true);
        setDate((prevState) => ({
          ...prevState,
          finalDate: day.dateString,
        }));
      }
    },
    [initialDateForMoment]
  );

  const marked = useMemo(() => {
    onFilter(date);
    return {
      [date.initialDate]: {
        disableTouchEvent: true,
        startingDay: true,
        color: '#00857D',
        textColor: '#FFF',
      },
      [date.finalDate]: {
        disableTouchEvent: true,
        endingDay: true,
        color: '#BE1E2D',
        textColor: '#FFF',
      },
    };
  }, [date]);

  return (
    <Calendar
      testID="first_calendar"
      enableSwipeMonths
      onDayPress={onDayPress}
      markingType="period"
      markedDates={marked}
      maxDate={MAX_DATE}
    />
  );
}
