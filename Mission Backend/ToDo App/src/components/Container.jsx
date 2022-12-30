import React, { useState } from "react";
import FormTodo from './FormTodo';
import TaskList from './TaskList';

const Container = () => {
    const [list, setlist] = useState([]);

    const addItem = addItem => {
        setlist([...list, addItem])
    }

    return(
        <div>
            <FormTodo addItem={addItem} />
            <TaskList list={list} setlist={setlist} />
        </div>
    );
}

export default Container;