<template>

    <div>
        <div>
            <div v-html="code"></div>
        </div>
        <div v-html="hello"></div>
    </div>

</template>
<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  // @ts-ignore
  import hello from './hello.md'
  // @ts-ignore
  import javascript from 'highlight.js/lib/languages/javascript';
  import javascript from 'highlight.js/lib/languages/html';

  // @ts-ignore
  import marked from 'marked'
  // @ts-ignore
  import hljs from "highlight.js";


  @Component
  export default class HelloWorld extends Vue {
    hello = hello
    code = '```javascript\nfunction(){\n\tconsole.log(123)\n}\n```'

    mounted() {
      marked.setOptions({
          renderer: new marked.Renderer(),
          highlight: function(code) {
            console.log(code)
            return hljs.highlightAuto(code).value;
          },
          pedantic: false,
          gfm: true,
          tables: false,
          breaks: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
          xhtml: false
        }
      );
      this.code = marked(this.code)
    }
  }
</script>