<template>
  <div class="nav-wrapper">
    <div class="content">123</div>
    <Nav />
  </div>
</template>

<script>
export default {
  name: "Money"
};
</script>

<style lang="scss">
.nav-wrapper {
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  overflow: auto;
  flex-grow: 1;
}
</style>
