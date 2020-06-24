<template>
  <div>
    <ListDefault :elements-list="elements" />
  </div>
</template>

<script>
import ListDefault from "../partials/_ListDefault";

export default {
  components: {
    ListDefault
  },
  created() {
    this.findAll();
  },
  data() {
    return {
      elements: []
    };
  },
  methods: {
    findAll: function() {
      fetch(
        "http://localhost:8000/api/category/" +
          this.$route.params.id +
          "/elements/?format=json"
      )
        .then(res => res.json())
        .then(res => (this.elements = res));
    }
  },
  watch: {
    "$route.params.id": function() {
      console.log("Listado de categorías");
      this.findAll();
    }
  }
};
</script>

<style >
.box {
  border: 3px solid #ccc;
  margin: 5px 0 0 0;
}
</style>