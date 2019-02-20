<template>
  <div class="popover" @click="xxx">
    <div class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "gulu-Popover",
    data () {
      return {visible: false}
    },
    methods: {
      xxx () {
        this.visible = !this.visible
      }
    }
  }
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