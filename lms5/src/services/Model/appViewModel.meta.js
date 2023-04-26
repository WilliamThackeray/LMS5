import teamData from './team_data2.js'

let AppViewModel = {

  data: teamData,
  list: {
    entity: "teams",
    entitySingle: "team",
    listTitle: "Bihño Teams",
    tableClasses: "table table-hover rounded m-2"
  },
  host: 'localhost:8080'
}
export default AppViewModel