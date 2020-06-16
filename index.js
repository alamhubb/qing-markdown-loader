const marked = require("marked");
const hljs = require("highlight.js/lib/core");
// const markdown = require('highlight.js/lib/languages/markdown');
// hljs.registerLanguage('markdown', markdown);

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  },
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});


module.exports = function (markdown) {
  const htmlStr = JSON.stringify(marked(markdown))

  console.log('-----------------------------')
  console.log(htmlStr)
  console.log('-----------------------------')


  return `export default ${htmlStr}`
}
