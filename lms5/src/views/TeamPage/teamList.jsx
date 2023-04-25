import SearchBar from './searchBar.jsx'
import TeamsTable from './teamTable.jsx'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react'

export default function TeamsList({ viewModel, model }) {
  const [filterText, setFilterText] = useState('')
  const [data, updateData] = useState(model.list())
  const [show, setShow] = useState(false)
  const [teamDelName, setTeamDelName] = useState('')

  function handleReset() {
    model.reset()
    updateData(model.list())
  }
  function handleDelete(e) {
    let delID = e.target.closest('tr').id
    let delName = model.list()[model.getItemIndex(delID)].name
    model.delete(delID)
    updateData(model.list())
    setShow(true)
    setTeamDelName(delName)
  }
  function handleSort(col) {
    let curDir = model.sortDir

    if (model.sortCol === col) model.sortDir = curDir === 'asc' ? 'desc' : 'asc'
    else model.sortDir = 'asc'

    model.sortCol = col
    model.sort(model.sortCol, model.sortDir, true)
    updateData(model.list())
  }
  function handleFilterChange(val) {
    model.filterStr = val
    setFilterText(val)
    updateData(model.list())
  }
  if (show) {
    return (
      <>
        <div className="col-sm-8 col-xs-12 m-2 p-3 bg-lightgray rounded">
          <div className="teamsContent">
            <Alert variant='dark' onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Team: {teamDelName} Deleted</Alert.Heading>
            </Alert>
            <SearchBar
              filterText={filterText}
              onFilterChange={handleFilterChange}
              title={viewModel.list.listTitle}
              className={viewModel.list.tableClasses}
            ></SearchBar>
            <TeamsTable
              teams={data}
              sortCol={model.sortCol}
              sortDir={model.sortDir}
              viewModel={viewModel}
              onHandleDelete={handleDelete}
              onHandleSort={handleSort}
            ></TeamsTable>
            <Button
              variant='primary'
              onClick={(e) => {
                handleReset()
              }}
            >Reset</Button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="col-sm-8 col-xs-12 m-2 p-3 bg-lightgray rounded">
        <div className="teamsContent">
          <SearchBar
            filterText={filterText}
            onFilterChange={handleFilterChange}
            title={viewModel.list.listTitle}
            className={viewModel.list.tableClasses}
          ></SearchBar>
          <TeamsTable
            teams={data}
            sortCol={model.sortCol}
            sortDir={model.sortDir}
            viewModel={viewModel}
            onHandleDelete={handleDelete}
            onHandleSort={handleSort}
          ></TeamsTable>
          <Button
            variant='primary'
            onClick={(e) => {
              handleReset()
            }}
          >Reset</Button>
        </div>
      </div>
    </>
  );
} 