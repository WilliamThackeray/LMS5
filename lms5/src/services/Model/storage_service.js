import Utils from '../../util/utilities.js'

export default class StorageService {
  "use Strict"
  constructor(data, lookups, entity, entitySingle, options={}) {
    this._entity = entity
    this._entitySigle = entitySingle
    this.utils = new Utils()
    this.model = {}
    this.options = options
    this.model.data = data || []
    this.model.lookups = lookups || {}
    this.origModel = this.utils.cloneObject(this.model)
  }

  // Getters and Setters
  get lookups() { return this.model.lookups }
  get data() { return this.model.data }
  get entity() { return this._entity }
  get entitySingle() { return this._entitySigle }
  get offset() { return this.model.options.offset }

  get limit() { return this.model.options.limit }
  set limit(lim) { this.model.options.limit = lim }

  get sortCol() { return this.model.options.sortCol }
  set sortCol(sCol) { this.model.options.sortCol = sCol }

  get sortDir() { return this.model.options.sortDir }
  set sortDir(sDir) { this.model.options.sortDir = sDir }

  get filterStr() { return this.model.options.filterStr }
  set filterStr(fStr) { this.model.options.filterStr = fStr }

  get filterCol() { return this.model.options.filterCol }
  set filterCol(fCol) { this.model.options.filterCol = fCol }

  set options(opts) {
    this.model.options = {
      sortCol: null,
      sortDir: 'asc',
      filterCol: '',
      filterStr: '',
      limit: 100,
      offset: null
    }
    this.model.options = Object.assign(this.model.options, opts)
  }

  // Async CRUD functions
  async list() { throw new Error('must be implemented in sub class') }
  async create(obj) { throw new Error('must be implemented in sub class') }
  async read(getId) { throw new Error('must be implemented in sub class') }
  async update(id, obj) { throw new Error('must be implemented in sub class') }
  async delete(delId) { throw new Error('must be implemented in sub class') }
  async reset() { throw new Error('must be implemented in sub class') }
  async getLookup(lookupName) { throw new Error('must be implemented in sub class') }
  
  // Cached Data Functions
  getItem(id) { return this.model.data.find(el => el.id === id) }

  lookup(lookupName) { return this.lookups[lookupName] }

}