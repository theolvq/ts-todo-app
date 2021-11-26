import { DataTypes } from 'sequelize';
import db from '..';

const Project = db.define('project', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  deadline: {
    type: DataTypes.DATE,
  },
});

export default Project;
