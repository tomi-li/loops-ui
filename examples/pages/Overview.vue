<template>
  <div>
    <h1>Overview</h1>

    <blockquote></blockquote>

    <h2>Quick Start</h2>

    <span>Installation</span>
    <code-block lang="bash">
      npm install loops-ui --save
    </code-block>

    <span>main.js</span>
    <code-block lang="javascript">
      import LoopsUI from 'loops-ui';
      Vue.use(LoopsUI);
      // or
      import { Button } from 'loops-ui';
      Vue.component('custom-button-name', Button);
    </code-block>

    <p>after install, you could use it in anywhere in your code.</p>
    <code-block lang="html">
      <lo-button title="test"></lo-button>
    </code-block>

  </div>
</template>

<script>
  export default {};
</script>
