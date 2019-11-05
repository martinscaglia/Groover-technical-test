<template>
  <div class="mainContainer">
    <div class="navBarContainer">
      <NavBar />
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

export default {
  components: {
    Logo,
    NavBar,
    FilterRow,
    Cards
  }
}
</script>

<style>
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
}

.chooseMovieContainer {
  width: 100vw;
  height: 90%;
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
}

.cardRow {
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding: 10px 20px;
  border-radius: 30px;
  width: 100%;
  margin-right: 40px;
}

</style>
