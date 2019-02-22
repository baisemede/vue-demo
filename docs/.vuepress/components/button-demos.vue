
<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="Setting" :loading="loading2" @click="loading2=!loading2">设置</g-button>
    <g-button icon="down" icon-position="right">下拉菜单</g-button>
    <g-button icon="thumbs-up">点赞</g-button>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import Button from "../../../src/button";
export default {
  components: {
    "g-button": Button
  },
  data() {
    return {
      content: `
<g-button>默认按钮</g-button>
<g-button icon='Setting' :loading='loading2' @click="loading2=!loading2">设置</g-button>
<g-button icon="down" icon-position="right">下拉菜单</g-button>
<g-button icon='thumbs-up'>点赞</g-button>
    `.trim()
    };
  }
};
</script>