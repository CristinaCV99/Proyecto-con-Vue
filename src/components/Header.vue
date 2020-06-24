<template>
  <div>
    <b-navbar type="dark" variant="dark" class="mb-3">
      <b-navbar-brand>Elements</b-navbar-brand>

      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>

        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Tipos" right>
          <b-dropdown-item
            v-for="t in types"
            v-bind:key="t.id"
            :to=" '/type/' + t.id +'/elements'"
          >{{ t.title }}</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Categorias" right>
          <b-dropdown-item
            v-for="c in categories"
            v-bind:key="c.id"
            :to=" '/category/' + c.id +'/elements'"
          >{{ c.title }}</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>


<script>
export default {
  created() {
    this.findAllType();
    this.findAllCategory();
  },
  data() {
    return {
      types: [],
      categories: []
    };
  },
  methods: {
    findAllType: function() {
      fetch("http://localhost:8000/api/type/?format=json")
        .then(res => res.json())
        .then(res => (this.types = res));
    },
    findAllCategory: function() {
      fetch("http://localhost:8000/api/category/?format=json")
        .then(res => res.json())
        .then(res => (this.categories = res));
    }
  }
};
</script>