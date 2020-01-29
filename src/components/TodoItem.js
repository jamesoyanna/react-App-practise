import React, { Component } from 'react';

export class TodoItem extends Component {
    render() {
        return (
          <div className="todo-item">
            <input type="checkbox" />
            <p>Place Holder From TodoItem</p>
          </div>
        );
    }
}

export default TodoItem;
