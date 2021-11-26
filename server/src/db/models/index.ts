import Todo from './todo';
import Project from './project';

Todo.belongsTo(Project);
Project.hasMany(Todo);

export { Todo, Project };
