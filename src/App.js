import React from "react";
import List from "./List";
import Form from "./Form";

const url = "http://localhost:3000/api/v1/task";

export default class App extends React.Component {
  state = {
    tasks: []
  };

  componentDidMount = () => {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ tasks: data });
      });
  };

  handleSubmit = task => {
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ tasks: data });
      });
  };

  handleDelete = id => {
    const url = `http://localhost:3000/api/v1/task/${id}`;
  };

  render() {
    const { tasks } = this.state;

    return (
      <div>
        <List tasks={tasks} handleDelete={this.handleDelete} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
