import Button from 'react-bootstrap/Button'
import { MdClear } from 'react-icons/md'

export default function SearchBar({title, filterText, onFilterChange}) {
  return (
    <div className="col-12 d-flex">
      <h1>{title}</h1>
      <div className="d-flex">
        <input 
          type="text"
          placeholder="Search"
          onChange={(e) => {
            onFilterChange(e.target.value)
          }}
        />
        <Button
          variant='primary'
          onClick={(e) => {
            onFilterChange('')
          }}
        >
          <MdClear />
          Clear
        </Button>

      </div>
    </div>
  )
}