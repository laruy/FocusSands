import { useCallback, useMemo, useState } from 'react';
import { Calendar, CalendarUtils } from 'react-native-calendars';

const INITIAL_DATE = '2022-07-06';

export default function CalendarComponent() {
  const [selected, setSelected] = useState(INITIAL_DATE);

  const getDate = (count: number) => {
    const date = new Date(INITIAL_DATE);
    const newDate = date.setDate(date.getDate() + count);
    return CalendarUtils.getCalendarDateString(newDate);
  };

  const onDayPress = useCallback((day: { dateString: string }) => {
    setSelected(day.dateString);
  }, []);

  const marked = useMemo(() => {
    return {
      [getDate(-1)]: {
        dotColor: 'red',
        marked: true,
      },
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: 'orange',
        selectedTextColor: 'red',
      },
    };
  }, [selected]);
  return (
    <Calendar
      testID="first_calendar"
      enableSwipeMonths
      current={INITIAL_DATE}
      onDayPress={onDayPress}
      markedDates={marked}
    />
  );
}