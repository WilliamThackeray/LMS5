import TeamRow from "./teamRow.jsx"
import TeamHeaderRow from "./teamHeaderRow.jsx"

function TeamsTable({ teams, viewModel, sortCol, sortDir, onHandleDelete, onHandleSort }) {
  // onHandleDelete()
  const itemList = teams.map((team) => {
    return <TeamRow key={team.id} team={team} id={team.id} onHandleDelete={onHandleDelete} />
  })
  return (
    <table className={viewModel.list.tableClasses}>
      <thead>
        <TeamHeaderRow headClasses={viewModel.list.headClasses} sortCol={sortCol} sortDir={sortDir} onHandleSort={onHandleSort} />
      </thead>
      <tbody>{itemList}</tbody>
    </table>
  )
}
export default TeamsTable