import SearchBar from './searchBar.jsx'
import TeamsTable from './teamTable.jsx'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function TeamsList({ viewModel, model }) {
  const [filterText, setFilterText] = useState('')
  const [data, updateData] = useState([])
  const [show, setShow] = useState(false)
  const [teamDelName, setTeamDelName] = useState('')
  const [coachList, updateCoachList] = useState([])
  const [coachData, updateCoachData] = useState([])

  async function fetchData() {
    let teams = await model.list()
    let coachList = await model.getLookup('coacheslist')
    let coaches = await model.getLookup('coachesData')
    updateData(teams)
    updateCoachList(coachList)
    updateCoachData(coaches)
  }

  useEffect(() => {
    fetchData()
  }, [])


  function handleReset() {
    model.reset()
    fetchData()
  }
  async function handleDelete(e) {
    let delID = e.target.closest('tr').id
    let delName = model.utils.getItemName(delID, model.data)
    await model.delete(delID)
    setShow(true)
    setTeamDelName(delName)
    fetchData()
  }
  function handleSort(col) {
    let curDir = model.sortDir

    if (model.sortCol === col) model.sortDir = curDir === 'asc' ? 'desc' : 'asc'
    else model.sortDir = 'asc'

    model.sortCol = col
    // model.sort(model.sortCol, model.sortDir, true)
    // set model.options
    model.options = { sortCol: model.sortCol, sortDir: model.sortDir }
    fetchData()
  }
  function handleFilterChange(val) {
    model.filterStr = val
    model.filerCol = val ? model.sortCol : ''
    setFilterText(val)
    fetchData()
  }
  function handleEdit() {
    // this will redirect to an edit page
  }
  if (show) {
    return (
      data && coachData && <>
        <div className="col-sm-8 col-xs-12 m-2 p-3 bg-lightgray rounded">
          <div className="teamsContent">
            <Alert variant='dark' onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Team: {teamDelName} Deleted</Alert.Heading>
            </Alert>
            <Link to={`/add-team`}>
              <Button variant='primary' >
                Add Team
              </Button>
            </Link>
            <SearchBar
              filterText={filterText}
              onFilterChange={handleFilterChange}
              title={viewModel.list.listTitle}
              className={viewModel.list.tableClasses}
            ></SearchBar>
            <TeamsTable
              teams={data}
              coaches={coachData}
              coachList={coachList}
              sortCol={model.sortCol}
              sortDir={model.sortDir}
              viewModel={viewModel}
              onHandleDelete={handleDelete}
              onHandleSort={handleSort}
              onHandleEdit={handleEdit}
            ></TeamsTable>
            <Button
              variant='primary'
              onClick={(e) => {
                handleReset()
              }}
            >Reset</Button>
            <Link to={`/add-team/`}>
              <Button
                variant='primary'
                className='m-2'
              >Add Team</Button>
            </Link>
          </div>
        </div>
      </>
    );
  }
  return (
    data && coachData && <>
      <div className="col-sm-8 col-xs-12 m-2 p-3 bg-lightgray rounded">
        <div className="teamsContent">
          <Link to={`/add-team`}>
            <Button variant='primary' >
              Add Team
            </Button>
          </Link>
          <SearchBar
            filterText={filterText}
            onFilterChange={handleFilterChange}
            title={viewModel.list.listTitle}
            className={viewModel.list.tableClasses}
          ></SearchBar>
          <TeamsTable
            teams={data}
            coaches={coachData}
            sortCol={model.sortCol}
            sortDir={model.sortDir}
            viewModel={viewModel}
            onHandleDelete={handleDelete}
            onHandleSort={handleSort}
          ></TeamsTable>
          {/* <Button
            variant='primary'
            onClick={(e) => {
              handleReset()
            }}
          >Reset</Button> */}
        </div>
      </div>
    </>
  );
} 