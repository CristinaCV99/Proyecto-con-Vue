<template>
  <div>
    <h5>Categorías</h5>
    <b-list-group>
      <b-list-group-item button v-for="c in categories" v-bind:key="c.id">
        <router-link :to=" '/category/' + c.id +'/elements'">{{ c.title }}</router-link>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>


<script>
export default {
  created() {
    this.findAll();
  },
  data() {
    return {
      categories: []
    };
  },
  methods: {
    findAll: function() {
      fetch("http://localhost:8000/api/category/?format=json")
        .then(res => res.json())
        .then(res => (this.categories = res));
    }
  }
};
</script>