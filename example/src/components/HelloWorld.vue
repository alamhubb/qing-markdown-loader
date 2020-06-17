<template>
    <div class="markdown-body">
        <div v-html="hello"></div>
    </div>
</template>
<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  // @ts-ignore
  import hello from './hello.md'

  @Component
  export default class HelloWorld extends Vue {
    hello = hello
  }
</script>
<style>
    .markdown-body {
        box-sizing: border-box;
        min-width: 200px;
        max-width: 980px;
        margin: 0 auto;
        padding: 45px;
    }

    @media (max-width: 767px) {
        .markdown-body {
            padding: 15px;
        }
    }
</style>