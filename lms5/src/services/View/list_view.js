import $ from 'jquery'

export default class ListView {
  constructor(storage, options = {}) {
    this.storage = storage
    this.options = options
    console.log('ListView constr.')
    this.initView()
  }

  get $headerIcon() {
    return $(`#${this.storage.sortCol}-${this.storage.sortDir}`)
  }
  get $listContainer() {
    return $(`#${this.options.listContainerID}`)
  }
  get $alertContainer() {
    return $(`#${this.alertContainerID}`)
  }
  get alertContainerID() {
    return this.options.alertContainerID
  }
  get $trashModal() {
    return $(`#${this.options.modalDeleteID}`)
  }
  get $editModal() {
    return $(`#${this.options.modalEditID}`)
  }
  get entitySingle() {
    return this.options.entitySingle
  }
  get $resetBtn() {
    return $(`#${this.options.resetBtnID}`)
  }

  initView() {
    this.bindWrapperEvents()
  }

  async render() {
    console.log('view render')
    let data = this.storage.list
    let html = `<table class="table table-hover table-striped">
              <thead>
                <tr>
                  <th class="table-header" data-col="name">Team Name
                    <i id="name-asc" class="fa-solid fa-arrow-up p-1" style="display:none"></i>
                    <i id="name-desc" class="fa-solid fa-arrow-down p-1" style="display:none"></i>
                  </th>
                  <th class="table-header" data-col="coachName">Coach Name
                    <i id="coachName-asc" class="fa-solid fa-arrow-up p-1" style="display:none"></i>
                    <i id="coachName-desc" class="fa-solid fa-arrow-down p-1" style="display:none"></i>
                  </th>
                  <th class="table-header" data-col="coachPhone">Coach Phone
                    <i id="coachPhone-asc" class="fa-solid fa-arrow-up p-1" style="display:none"></i>
                    <i id="coachPhone-desc" class="fa-solid fa-arrow-down p-1" style="display:none"></i>
                  </th>
                  <th class="table-header" data-col="players"># of Players
                    <i id="players-asc" class="fa-solid fa-arrow-down p-1" style="display:none"></i>
                    <i id="players-desc" class="fa-solid fa-arrow-down p-1" style="display:none"></i>
                  </th>
                  <th class="table-header" >Actions</th>
                </tr>
              </thead>

              <tbody>`
    for (let row of data) {
      html += `<tr id="${row.id}" data-bs-toggle="popover" data-id="row.id" 
        data-bs-trigger="hover" 
        data-bs-placement="bottom" 
        title="${row.name}" 
        data-bs-content="${row.about}"
        data-bs-html="true"
        data-bs-delay="200"
        >
      <td class="teamName">${row.name}</td>
      <td>${`${row.coachName}`}</td>
      <td>${`${row.coachPhone}`}</td>
      <td>${`${row.players}`}</td>
      <td>
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#${this.options.modalDeleteID}"><i class="fas fa-trash-can p-2 m-0 trash"></i></button>
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#${this.options.modalEditID}"><i class="fas fa-gear p-2 m-0 cog"></i></button>
      </td>
      `
    }

    html += `
              </tbody>
            </table>`
    this.$listContainer.html(html)
    this.bindListEvents();


  }
  bindListEvents() {
    console.log('bindListEvents')
    let that = this

    // $('.teamsBtn').on('click', () => { 
    //   console.log('Teams button clicked.')
    //   $('.teamsContent').show(500)
    //   $('.homeContent').hide(500)
    // })
    
    // $('.homeBtn').on('click', () => {
    //   console.log('Home button clicked.') 
    //   $('.homeContent').show(500)
    //   $('.teamsContent').hide(500)
    // })
    

    $('.table-header').on('click', (e) => {
      const dataName = $(e.currentTarget).attr('data-col')
      console.log(`dataName: ${dataName}`)
      console.log(`sortCol: ${that.storage.sortCol}`)
      let sortDirection = this.storage.sortDir

      if (that.storage.sortCol === dataName) {
        that.storage.sortDir = (sortDirection == 'asc' ? 'desc' : 'asc')
      } else {
        that.storage.sortDir = 'asc'
      }

      that.storage.sortCol = dataName
      that.storage.model.data = that.storage.sort(dataName, sortDirection)
      console.log(that.storage.model.data)
      that.render()
      this.$headerIcon.show()
    })

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })

    $('.trash').on('click', (e) => {
      let $rowToDel = $(e.target).closest('tr')
      $('#confirmDeleteBtn').on('click', (e) => {
        console.log('confirm delete clicked')
        let $teamName = $rowToDel.children()[0].innerHTML
        $('.deleteAlert').html(`
          <div class="deleteAlert alert alert-warning alert-dismissible">
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            <strong>Warning!</strong> Team <em>${$teamName}</em> Deleted.
          </div>
        `)
        $rowToDel.remove()
        this.storage.delete($rowToDel[0].id)
      })      
    })

    
    // TODO: implement editing 
    let $team = null
    $('.cog').on('click', (e) => {
      console.log('cog clicked')

      let $curRow = e.target.closest('tr')
      $team = this.storage.list[$curRow.id-1]
      console.log('team is ', $team)

      $('#editModalTitle').html(`Edit: <em>${$team.name}</em>`)

      let html = `<form id="teamEditForm">`
      for (let key in $team) {
        if (key == 'id') { }
        else if (key == 'coachId') { } 
        else if (key == 'about') {
          html += `<label class="form-label m-1" for="${key}">${key}</label>
          <textarea class="form-control editInput" rows="5" id="${key}" name="${key}" required>${$team[key]}</textarea>`
        }
        else {
          html += `<label class="form-label m-1" for="${key}">${key}</label>
          <input class="form-control editInput" type="text" id="${key}" name="${key}" value="${$team[key]}" required>`
        }
      }
      let $modalBody = $('#editModalBody')
      html += `</form>`
      $modalBody.html(html)

      $('#confirmEditBtn').on('click', (e) => {
        console.log('confirm edit clicked')
  
        let $errorDiv = $('#deleteAlert')
        let html = `
          <div class="deleteAlert alert alert-danger alert-dismissible">
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            <p><strong>Warning!</strong> Team could not be edited.</p>
          `
        let errors = []
  
        let $editInputs = $('.editInput')
  
        for (let input of $editInputs) {
          // Input Validation Loop.
          console.log(input.name)
          // TODO: check any input values for correct patterns.
          switch(input.name) {
            case 'name':
              if (!input.value) errors.push('Team Name is blank.')
              break;
            case 'coachName':
              if (!input.value) errors.push('Coach Name is blank.')
              break;
            case 'coachPhone':
              if (!input.value) errors.push('Coach Phone is blank.')
              break;
            case 'coachEmail':
              if (!input.value) errors.push('Coach Email is blank.')
              break;
            case 'players':
              if (!input.value) errors.push('Players is blank.')
              break;
            case 'about':
              if (!input.value) errors.push('About is blank.')
              break;
            default:
          }
        }
  
        console.log($editInputs)
        console.log(errors)
        if (errors.length > 0) {
          for (let err of errors) {
            html += `<p>${err}</p>`
          }
          html += `</div>`
          $errorDiv.html(html)
        } 
        else {
          console.log('team is ', $team)
          this.storage.update({   // upadate the team with the new information
            id: $team.id,
            name: $editInputs[0].value,
            coachId: $team.id,
            coachName: $editInputs[1].value,
            coachPhone: $editInputs[2].value,
            coachEmail: $editInputs[3].value,
            players: $editInputs[4].value,
            about: $editInputs[5].value,
          })
          this.render()  // re-render the list to show changes.
  
        }
  
  
      })
    })

    // TODO: implement live validation for the above form? ^^^


  }
  bindWrapperEvents() {
    this.$resetBtn.on('click', e => {
      this.storage.reset()  // reset local storage
      this.render()         // re-render the list
    })
  }
}