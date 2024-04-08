import { useCallback, useMemo, useState } from 'react';
import { View } from 'react-native';
import { Calendar, CalendarUtils } from 'react-native-calendars';
import { ListTasks } from '../../components/ListTasks';

const INITIAL_DATE = '2022-07-06';

export default function Report() {
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
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Calendar
        testID="first_calendar"
        enableSwipeMonths
        current={INITIAL_DATE}
        onDayPress={onDayPress}
        markedDates={marked}
      />

      <ListTasks />
    </View>
  );
}
