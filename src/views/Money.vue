<template>
  <div>
    <Layout class-prefix="layout">
      <numberPad />
      <Types :xxx="333" />
      <Notes />
      <Tags />
    </Layout>
  </div>
</template>

<script>
import Types from "@/components/Money/Types.vue";
import numberPad from "@/components/Money/numberPad.vue";
import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";
export default {
  name: "Money",
  components: { Types, numberPad, Notes, Tags }
};
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

