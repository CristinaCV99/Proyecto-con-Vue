<template>
  <div id="app">
    <Header />
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <Categories />
          <br>
          <Types />
        </div>
        <div class="col-md-8">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Categories from "./components/Categories";
import Types from "./components/Types";
export default {
  name: "App",
  components: {
    Header,
    Categories,
    Types
  }
};
</script>
