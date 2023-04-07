<template>
  <div class="layout-default">
    <a-menu @select="handleMenuSelectEvent" v-model:selectedKeys="selectedKeys" class="layout-default-menu" mode="inline" theme="dark">
      <a-menu-item key="/"> 主应用 </a-menu-item>
      <a-menu-item key="/app-vite/">vite子应用</a-menu-item>
    </a-menu>
    <div class="layout-default-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const selectedKeys = ref<string[]>(["/"]);
const handleMenuSelectEvent = ({ key }) => {
  router.push(key);
};

</script>

<style scoped lang="scss">
.layout-default {
  height: 100%;
  display: flex;
  &-menu {
    width: 300px;
  }
  &-wrapper {
    flex: auto;
  }
}
</style>
