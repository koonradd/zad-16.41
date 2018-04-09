import React from "react";
import uuid from "uuid";
import style from "./App.css";
import Title from "../components/Title.js";
import TodoList from "../components/TodoList.js";
import TodoForm from "../components/TodoForm.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          text: "clean room"
        },
        {
          id: 2,
          text: "wash the dishes"
        },
        {
          id: 3,
          text: "feed my cat"
        }
      ],
      value: ""
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  addTodo(e) {
    const todo = {
      text: this.state.value,
      id: uuid.v4()
    };
    e.preventDefault();
    const data = [...this.state.data, todo];
    this.setState({ data, value: "" });
  }
  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({ data: remainder });
  }
  render() {
    return (
      <div className={style.TodoApp}>
        <Title title="To do list" taskLength={this.state.data.length} />
        <TodoForm
          add={this.addTodo}
          value={this.state.value}
          handleChange={this.handleChange}
        />
        <TodoList todos={this.state.data} remove={this.removeTodo} />
      </div>
    );
  }
}

export default App;
