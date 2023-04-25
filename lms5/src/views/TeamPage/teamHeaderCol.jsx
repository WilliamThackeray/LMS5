import { FaSortUp, FaSortDown, FaSort } from 'react-icons/fa'

export default function TeamHeaderCol({ label, headClasses, colName, sortCol, sortDir, onHandleSort }) {
  
  let headerIcon = <FaSort></FaSort>
  if (colName === sortCol) headerIcon = (sortDir === 'asc' ? <FaSortDown/> : <FaSortUp/>)
  
  const handleColClick = () => {
    onHandleSort(colName)
  }

  return (
    <>
      <th className={headClasses} onClick={handleColClick}> {label} {headerIcon} </th>
    </>
  )
}