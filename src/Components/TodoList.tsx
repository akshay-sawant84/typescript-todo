import * as React from 'react'


class TodoList extends React.Component<{}, Istate> {
  constructor(props: {}) {
    super(props)
    this.state = {
      currentTask: '',
      tasks: [],
    }
  }

  onHandleSubmit = () => {
    if (this.state.currentTask === '') {
      alert('This field should not be empty')
    } else {
      this.setState({
        currentTask: '',
        tasks: [...this.state.tasks, this.state.currentTask],
      })
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card p-3">
              <h2 className="mb-3 text-center">React Typescript Todo List</h2>
              <div className="form-group my-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Task"
                  value={this.state.currentTask}
                  onChange={(e) =>
                    this.setState({ currentTask: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                onClick={this.onHandleSubmit}
                className="btn btn-block btn-primary"
              >
                Add Task
              </button>
            </div>
            <div className="card my-3">
              {this.state.tasks.map((task) => (
                <ul>
                  <li>{task}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

interface Istate {
  currentTask: string
  tasks: Array<string>
}

export default TodoList;
