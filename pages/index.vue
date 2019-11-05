<template>
  <div class="mainContainer">
    <div class="navBarContainer">
      <NavBar />
      <List />
    </div>
    <div class="chooseMovieContainer">
      <div class="filterRow">
        <FilterRow />
      </div>
      <div class="cardRow">
        <Cards />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import NavBar from '~/components/NavBar.vue'
import FilterRow from '~/components/Filter.vue'
import Cards from '~/components/Cards.vue'
import List from '~/components/List.vue'

export default {
  components: {
    Logo,
    NavBar,
    List,
    FilterRow,
    Cards
  }
}
</script>

<style>

body {
  background-color: rgba(255, 72, 0, 0.01);
}
.mainContainer {
  width: 100vw;
  height: 100vh;

  /* display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; */
}

.navBarContainer {
  width: 100vw;
  background-color: rgba(255, 255, 255, 1);
}

.chooseMovieContainer {
  width: 100vw;
  height: 1200px;
  margin-top: 40px;
  display: flex;
}

.filterRow {
  min-width: 270px;
  height: 620px;
  margin-left: 40px;
  margin-right: 40px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding: 10px 20px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
}

.cardRow {
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding: 10px 20px;
  border-radius: 30px;
  width: 100%;
  margin-right: 40px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
}

</style>
