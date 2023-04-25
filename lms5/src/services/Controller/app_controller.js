import LocalStorageService from "../Model/local_storage_service.js";
import teamData from "../Model/team_data2.js";
import listView from "../View/list_view.js"

export default class AppController {
  constructor() {
    console.log('app controller constr.')
    this.storage = new LocalStorageService(teamData, "teamData")
    this.listView = new listView(this.storage, {
      listContainerID: "team-list",
      modalDeleteID: "trashModal",
      modalEditID: "editModal",
      alertContainerID: "deleteAlert",
      entitySingle: "team",
      resetBtnID: "resetBtn"
    });
    this.render();
  }
  async render() {
    console.log('app controller render')
    let data = this.storage.list
    console.log(data)
    await this.listView.render()
  }
}