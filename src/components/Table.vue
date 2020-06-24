<template>
  <div class="container">
    <b-table striped hover :items="elements" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  created() {
    this.findAll();
  },
  data() {
    return {
      fields: [
        {
          key: "id",
          sortable: true
        },
        {
          key: "title",
          sortable: false
        },
        {
          key: "url_clean",
          label: "Url limpia",
          sortable: true,
          variant: "danger"
        },
        {
          key: "description",
          sortable: true
        },
        {
          key: "category",
          sortable: true
        },
        {
          key: "type",
          sortable: true
        }
      ],
      elements: []
    };
  },
  methods: {
    findAll: function() {
      fetch("http://localhost:8000/api/element/?format=json")
        .then(res => res.json())
        .then(res => (this.elements = res));
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