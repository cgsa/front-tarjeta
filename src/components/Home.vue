<template>
  <div>
    <Nav />
    <EntryCode />    
  </div>
</template>
<script>
import EntryCode from "@/components/EntryCode.vue";
import Nav from "@/components/Nav.vue";
export default {
  name: "Home",
  components: {
    EntryCode,
    Nav
  }
};
</script>
