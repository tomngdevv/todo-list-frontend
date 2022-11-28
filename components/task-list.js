import { TASKS_DUMMY_DATA } from "../utils/constant";
import TaskItem from "./task-item";


export default TasksList = () => {
    return (
        <>
            {
                TASKS_DUMMY_DATA.map((data, i) =>
                    <TaskItem key={i} completed={data.completed} title={data.title} date={data.date} />
                )
            }

        </>
    );
}