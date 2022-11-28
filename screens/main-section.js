import { View, Text } from "react-native";
import TaskListSection from "./task-list-section";
import CalendarSection from "./calendar-section";
import SettingSection from "./setting-section";
import { FOOTER } from "../utils/constant";

export default MainSection = ({currentMainPage}) => {
    if(currentMainPage === FOOTER.todo) {
        return (
            <View>
                <TaskListSection />
            </View>
        );
    } else if(currentMainPage === FOOTER.calendar) {
        return (
            <View>
                <CalendarSection />
            </View>
        );
    } else if (currentMainPage === FOOTER.setting) {
        return (
            <View>
                <SettingSection />
            </View>
        );
    }
}