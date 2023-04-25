import Button from 'react-bootstrap/Button'
import { BsTrash3 } from 'react-icons/bs'
import { AiOutlineEdit } from 'react-icons/ai'

export default function TeamRow({team, id, onHandleDelete, onHandleEdit}) {
  return (
    <tr key={id} id={id}>
      <td>{team.name}</td>
      <td>{team.coachName}</td>
      <td>{team.coachPhone}</td>
      <td>{team.coachEmail}</td>
      <td>
        <Button
          className='m-2'
          variant='primary'
          onClick={onHandleEdit}
        >
          <AiOutlineEdit />
        </Button>
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