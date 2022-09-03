class ChitterApi {

  loadPeeps(callback) {
    const callbackFn = callback || (() => { })
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
      .then(response => response.json())
      .then((data) => callbackFn(data));
  }
}
module.exports = ChitterApi;