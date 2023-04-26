import LocalStorageService from '../../services/Model/local_storage_service.js'
import TeamsAside from './teamAside.jsx';
import TeamsList from './teamList.jsx';
import { getApi } from '../../services/Model/rest_storage_service.js'
import AppViewModel from '../../services/Model/appViewModel.meta.js';

export default function TeamsPage() {
  // let localStorage = new LocalStorageService(AppViewModel.data, AppViewModel.list.entity)

  return (
    <>
      <div className="container-fluid main bg-gray">
        <div className="row d-flex">
          <TeamsAside></TeamsAside>
          <TeamsList viewModel={AppViewModel} model={getApi()}></TeamsList>
        </div>
      </div>
    </>)
}