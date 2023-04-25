import TeamHeaderCol from "./teamHeaderCol"

function TeamHeaderRow({label, headClasses, sortCol, sortDir, onHandleSort}) {
  return (
    <tr>
      <TeamHeaderCol label='Name' headClasses={headClasses} colName='name' sortCol={sortCol} sortDir={sortDir} onHandleSort={onHandleSort}></TeamHeaderCol>
      <TeamHeaderCol label='Coach Name' headClasses={headClasses} colName='coachName' sortCol={sortCol} sortDir={sortDir} onHandleSort={onHandleSort}></TeamHeaderCol>
      <TeamHeaderCol label='Coach Phone' headClasses={headClasses} colName='coachPhone' sortCol={sortCol} sortDir={sortDir} onHandleSort={onHandleSort}></TeamHeaderCol>
      <TeamHeaderCol label='Coach Email' headClasses={headClasses} colName='coachEmail' sortCol={sortCol} sortDir={sortDir} onHandleSort={onHandleSort}></TeamHeaderCol>
      <th>Actions</th>
    </tr>
  )
}
export default TeamHeaderRow