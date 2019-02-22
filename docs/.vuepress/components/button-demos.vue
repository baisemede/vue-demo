
<template>
  <div>
    <g-button icon="left">上一页</g-button>
    <g-button>暂停</g-button>
    <g-button icon="right" icon-position="right">下一页</g-button>
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
          <g-button icon="settings">默认按钮</g-button>
          <g-button :loading="true">默认按钮</g-button>
          <g-button disabled>默认按钮</g-button>
      `
        .replace(/\t+| +/g, "")
        .trim()
    };
  }
};
</script>