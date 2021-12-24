export const AddTaskButton = ({ onSetShowAddTask,showAddTask }) => {
  return (
    <div className="add__project__button task">
      <span className="plus">+</span>
      <span
        className="add__text"
        onClick={() => onSetShowAddTask(!showAddTask)}
      >
        Add Task
      </span>
    </div>
  );
};
