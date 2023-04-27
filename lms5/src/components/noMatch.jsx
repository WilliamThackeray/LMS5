import { Link } from 'react-router-dom'

export default function NoMatch() {
  return (
    <>
      <div>
        <h2>How did you get here?</h2>
        <p>
          <Link to='/'>Go to home page.</Link>
        </p>
      </div>
    </>
  )
}