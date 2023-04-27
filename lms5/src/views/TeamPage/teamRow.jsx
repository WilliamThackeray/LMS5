import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { BsTrash3 } from 'react-icons/bs'
import { AiOutlineEdit } from 'react-icons/ai'

export default function TeamRow({ team, coaches, id, onHandleDelete, onHandleEdit }) {
  function findcoach(coaches) {
    for (let coach of coaches) {
      if (coach.team_id === id) {
        return coach
      }
    }
    return {fullName: 'none', phone: 'none', email: 'none'}
  }
  return (
    <tr key={id} id={id}>
      <td>{team.name}</td>
      <td>{findcoach(coaches).fullName}</td>
      <td>{findcoach(coaches).phone}</td>
      <td>{findcoach(coaches).email}</td>
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