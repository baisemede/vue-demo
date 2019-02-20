<template>
  <div class="popover" @click.stop="xxx">
    <div class="content-wrapper" v-if="visible" @click.stop> <!-- @click.stop 可以阻止事件冒泡!!! -->
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "gulu-Popover",
  data() {
    return { visible: false };
  },
  methods: {
    xxx() {
      this.visible = !this.visible;
      this.$nextTick(() => {
        let eventHandler = () => {
          this.visible = false;
          document.removeEventListener("click", eventHandler); //删除当前函数，防止每次点击都新增！！！
        };
        //添加click事件，点击按钮外部触发 使popover 隐藏
        document.addEventListener("click", eventHandler);
      });
    }
  }
};
</script>

<style scoped lang="scss">
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  .content-wrapper {
    position: absolute;
    background-color: #b9b9c8;
    color: white;
    bottom: 100%;
    left: 0;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
}
</style>