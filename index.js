const marked = require("marked");

module.exports = function (markdown) {
  const htmlCode = marked(markdown)
  const htmlStr = JSON.stringify(htmlCode)
  return `export default ${htmlStr}`
}
