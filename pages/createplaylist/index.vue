<template>
  <div class="mainContainer">
    <div class="navBarContainer">
      <NavBar />
    </div>
    <div v-if="movie > 0" class="listBarContainer">
      <List :moviesInPlaylist="movie"/>
    </div>
    <div class="chooseMovieContainer">
      <div class="filterRow">
        <FilterRow 
        :searchTerms="searchTerms"
        :getMovies="getMovies"/>
      </div>
      <div class="cardRow">
        <Cards
        :movieArray="movieArray"
        :searchTerms="searchTerms"
        :getMovies="getMovies"
        @updateMovie="updateMovieParent"/>
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
  import axios from "axios";
  
  export default {
    components: {
      Logo,
      NavBar,
      List,
      FilterRow,
      Cards
    },
    data() {
      return {
        searchTerms: {
          genre: 'All',
          page: 1,
          ratings: [0, 10],
          years: [1915, 2019],
          keywords: "",
          limit: 25
        },
        movie: Number,
        movieArray: Array,
        movieListIds: []
      }
    },
    // First fetch
    asyncData() {
      let searchTerms = {
        genre: 'All',
        page: 1,
        ratings: [0, 10],
        years: [1915, 2019],
        keywords: "",
        limit: 25
      }
      return axios.post('http://localhost:3000/search', searchTerms)
      .then((res) => {
        return { movieArray: res.data }
      })
    },
    created() {
      this.movie = 0;
    },
    methods: {
      async getMovies(params) {
        console.log("*** GET MOVIES ***");
        console.log("*** GET MOVIES PARAMS = ", params);
        try {
          const res = await axios.post('http://localhost:3000/search', params);
          if (res.data.length > 0) {
            if ((params.genre === "" || params.keywords === "") && params.page > 1) {
              this.movieArray.push(...res.data);
            } else {
              this.movieArray = res.data;
            }
            this.searchTerms = params;
          } else {
            this.searchTerms.page = 1;
          }
        } catch (err) {
          console.log(err);
        }
      },
      toggleSearch() {
        this.$store.commit("SET_ISSEARCH", !this.$store.getters.isSearch);
      },
      updateMovieParent(value) {
        this.movie += value;
        console.log(this.movie);
      },
      updateMovieArray(data) {

      }
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
}

.navBarContainer {
  width: 100vw;
  background-color: rgba(255, 255, 255, 1);
  height: 70px;
}

.listBarContainer {
  position: sticky;
  width: 100%;
  height: 70px;
  display: flex;
  margin-top: 4px;
  top: 0px;
  z-index: 100;
}

.chooseMovieContainer {
  width: 100vw;
  height: 1900px;
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
  width: 100%;
  margin-right: 40px;
}

</style>