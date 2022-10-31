<script lang="ts" setup>
import Button from "../src/components/button/button.vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <button>555</button>
  <Button class="content"></Button>
</template>

<style lang="less">
@width: 400px;
@height: 200px;

.content {
    width: @width;
    height: @height;
    background-color: yellowgreen;
}
</style>
