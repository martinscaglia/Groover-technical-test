<template>
  <!-- MAIN CONTAINER -->
  <div class="mainContainer">

    <!-- NAVBAR CONTAINER -->
    <div class="navBarContainer">
      <NavBar />
    </div>

    <!-- LIST CONTAINER -->
    <div v-if="moviesInPlaylistCount > 0" class="listBarContainer">
      <List 
      :moviesInPlaylistCount="moviesInPlaylistCount"
      :moviesInPlaylistArray="moviesInPlaylistArray"
      />
    </div>

    <!-- MOVIE & FILTER CONTAINER -->
    <div class="chooseMovieContainer">
      <div class="filterRow">
        <FilterRow 
        :searchTerms="searchTerms"
        :getMovies="getMovies"/>
      </div>

      <!-- MOVIE CARDS CONTAINER -->
      <div class="cardRow">
        <Cards
        :movieArray="movieArray"
        :searchTerms="searchTerms"
        :getMovies="getMovies"
        @updateMovieCount="updateMovieCount"
        @updateMovieArray="updateMovieArray"/>
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
        moviesInPlaylistCount: Number,
        moviesInPlaylistArray: Array,
        movieArray: Array,
        movieListIds: [],
        searchTerms: {
          genre: 'All',
          page: 1,
          ratings: [0, 10],
          years: [1915, 2019],
          keywords: "",
          sort: "rating",
          limit: 25
        },
      }
    },

    // First 25 elements data fetch
    asyncData() {
      let searchTerms = {
        genre: 'All',
        page: 1,
        ratings: [0, 10],
        years: [1915, 2019],
        keywords: "",
        sort: "rating",
        limit: 25
      }
      return axios.post('http://localhost:3000/search', searchTerms)
      .then((res) => {
        return { movieArray: res.data }
      })
    },

    created() {
      this.moviesInPlaylistCount = 0;
      this.moviesInPlaylistArray = [];
    },
    methods: {
      async getMovies(params) {
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
      updateMovieCount(value) {
        this.moviesInPlaylistCount += value;
      },
      updateMovieArray(data, method) {
        if (method === "add")
          this.moviesInPlaylistArray = data;
        else
          this.moviesInPlaylistArray = [];
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
    z-index: 1000;
  }
  .chooseMovieContainer {
    width: 100vw;
    height: 1900px;
    margin-top: 40px;
    display: flex;
  }
  .filterRow {
    min-width: 270px;
    height: 660px;
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