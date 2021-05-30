import React, { useState } from 'react';
import "./Todo.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";

const Todo = () => {

    const [inputData, setinputData] = useState('');
    const list = useSelector((state) => state.todoReducer.list);
    const dispatch = useDispatch();

    return (
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <figcaption>Add your work-list here</figcaption>
                </figure>
                <div className="addItems">
                    <input type="text" placeholder="Add Item..."
                        value={inputData}
                        onChange={(event) => setinputData(event.target.value)}
                    />
                    <i className="fa fa-plus add-btn" onClick={() => dispatch(addTodo(inputData), setinputData(''))}></i>
                </div>

                <div className="showItems">
                    {
                        list.map((element) => {
                            return (
                                <div className="eachItem" key={element.id}>
                                    <h3>{element.data}</h3>
                                    <div className="todo-btn">
                                        <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => dispatch(deleteTodo(element.id))}></i>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>


                <div className="showItems">
                        <button className="btn"
                        onClick={()=> dispatch(removeTodo())}
                        >
                        <span>Remove All</span>
                        </button>
                </div>
            </div>
        </div>
    );
};

export default Todo;