class JekyllSearch {
  constructor(dataSource, searchField, resultsList, siteURL) {
  
  }

  fetchedData() {
    return fetch(this.dataSource, {mode: 'no-cors'})
      .then(blob => blob.json())
  }

  async findResults() {

  }

  async displayResults() {

  }

  // https://stackoverflow.com/questions/43431550/async-await-class-constructor
  init() {
    
  }
}