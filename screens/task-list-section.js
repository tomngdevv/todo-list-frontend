import { View } from "react-native";
import TaskList from "../components/task-list";

export default TaskListSection = () => {
    // TODO: Multiple lists, one for overdue, one for today, one for upcoming
    return (
       <View>
            <TaskList />
        </View>
    );
}