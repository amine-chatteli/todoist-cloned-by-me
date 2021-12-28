export const SingleTask = ({ task,id }) => {
  return (
    <li className="single__task">
      <input type="checkbox" className="hideme" id={id}/>
      <label className="woo" htmlFor={id}>
        {task}
      </label>
    </li>
  );
};
