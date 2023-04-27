import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { BsTrash3 } from 'react-icons/bs'
import { AiOutlineEdit } from 'react-icons/ai'

export default function TeamRow({ team, coach, id, onHandleDelete, onHandleEdit }) {
  return (
    <tr key={id} id={id}>
      <td>{team.name}</td>
      <td>{team.coachName}</td>
      <td>{team.coachPhone}</td>
      <td>{team.coachEmail}</td>
      <td>
        <Link to={`/edit-team/${id}`}>
          <Button
            className='m-2'
            variant='primary'
            onClick={onHandleEdit}
          >
            <AiOutlineEdit />
          </Button>
        </Link>
        <Button
          className='m-2'
          variant='primary'
          onClick={onHandleDelete}
        >
          <BsTrash3 />
        </Button>
      </td>
    </tr>
  )
}