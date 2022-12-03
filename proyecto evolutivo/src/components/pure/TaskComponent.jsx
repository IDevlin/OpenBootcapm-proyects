


const TaskComponent = ({task}) => {

  console.log(task)
  return (
    <tr
      className="fw-normal"
      
    >
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td className="align-middle">
        <span>{task.description}</span>
      </td>
      <td className="align-middle">
        {/* Execution of function to return badge element */}
    
      </td>
      <td className="align-middle">
        {/* Execution of function to return icon depending on completion */}
       
        <i
          className="bi-trash task-action"
          style={{ color: 'tomato' }}
         
        ></i>
      </td>
    </tr>
  )
}

export default TaskComponent