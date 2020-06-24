<template>
  <div>
    <b-card>
      <h1>{{ element.title }}</h1>
      <div class="p-3">
        <router-link
          class="btn btn-danger btn-sm"
          :to="{ name:'list-category',params:{id: element.id} }"
        >{{ category.title }}</router-link>
        <router-link
          class="ml-2 btn btn-danger btn-sm"
          :to="{ name:'list-type',params:{id: element.id} }"
        >{{ type.title }}</router-link>
        <b-card-text>{{ element.description }}</b-card-text>
      </div>
    </b-card>
  </div>
</template>

<script>

const axios = require('axios')

export default {
  created() {
    this.find();
  },
  data() {
    return {
      element: Object,
      category: Object,
      type: Object
    };
  },
  methods: {
    find: function() {
      fetch(
        "http://localhost:8000/api/element/" +
          this.$route.params.id +
          "/?format=json"
      )
        .then(res => res.json())
        .then(res => {
          this.element = res;
          this.findCategory(this.element.id);
          this.findType(this.element.id);
        });
    },
    findCategory: function(id) {
      axios.get("http://localhost:8000/api/category/" + id + "/?format=json")
        //.then(res => res.json())
        .then(res => (this.category = res.data));
    },
    findType: function(id) {
      axios.get("http://localhost:8000/api/type/" + id + "/?format=json")
        //.then(res => res.json())
        .then(res => (this.type = res.data));
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