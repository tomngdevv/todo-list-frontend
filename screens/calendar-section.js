import { View, Text } from "react-native";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import moment from 'moment';

export default CalendarSection = () => {
    return (
        <>
            <View>
                <Calendar 
                    initialDate={moment.now()}
                    markedDates={{
                        '2022-11-27': {marked: true, dotColor: 'red'},
                      }}
                />
            </View>
        </>
    );
}