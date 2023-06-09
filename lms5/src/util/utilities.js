export default class Utilities {
  constructor() {
    this.files = {}
  }

  // async getFileContents(url) {
  //   if (!(url in this.files)) {
  //     this.files[url] = await $.get(url)
  //   }
  //   return this.files[url]
  // }

  getItemName(id, data) {
    for (let item of data) {
      if (item.id === parseInt(id)) {
        return item.name
      }
    }
  }

  cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj))
  }

  getQueryString(options = this.options) {
    // put options into a query string
    if (options === undefined) return ''
    let qstring = '?'
    if (options.sortcol) {
      qstring += `sort_col=${options.sortCol}&`
    }
    if (options.sortDir) {
      qstring += `sort_dir=${options.sortDir}&`
    }
    if (options.filterStr) {
      qstring += `filter_str=${options.filterStr}&`
    }
    if (options.filterCol) {
      qstring += `filter_col=${options.filterCol}&`
    }
    if (options.limit) {
      qstring += `limit=${options.limit}&`
    }
    if (options.offset) {
      qstring += `offset=${options.offset}&`
    }
    // cut off the last '&'
    qstring = qstring.slice(0, qstring.length-1)
    return qstring
  }

}