import React from "react";
import Checkbox from "./Checkbox";

const TaskList = props => {
    const {list, setlist} = props;

    const onChangeStatus = e => {
        const {name, checked} = e.target;
        const updateList = list.map(item => ({
            ...item,
            done: item.id === name ? checked : item.done
        }));
        setlist(updateList);
    }

    const onClickRemoveItem = e => {
        const updateList = list.filter(item => !item.done);
        setlist(updateList);
    }

    const checkbox = list.map(item => (
        <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
    ));

    return (
        <div className="todo-list">
            {list.length ? checkbox : "No hay tareas"}
            {list.length ? (
                <p>
                    <button className="button pink" onClick={onClickRemoveItem}> Delete </button>
                </p>
            ) : null}
        </div>
    );
}

export default TaskList;