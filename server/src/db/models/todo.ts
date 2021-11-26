import { DataTypes } from 'sequelize';
import db from '..';

const Todo = db.define('todo', {
  todo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isDone: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default Todo;
