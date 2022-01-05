export const SingleTask = ({ taskName,id }) => {
  return (
    <li className="single__task">
      <input type="checkbox" className="hideme" id={id}/>
      <label className="woo" htmlFor={id}>
        {taskName}
      </label>
    </li>
  );
};
