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
              <FilterRow />
            </div>
            <div class="cardRow">
              <Cards
              :moviesInPlaylist="movie"
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
          async asyncData() {
            let params = {
              genre: 'All',
              page: 1,
              ratings: [0, 10],
              years: [1915, 2019],
              keywords: "",
              limit: 25
            }
            try {
              const res = await axios.post('http://localhost:3000/search', params);
              console.log("RES = ", res);
            } catch (err) {
              console.log(err);
            }

          },
          data() {
            return {
              searchTerms: [],
              movie: Number,
              movieListIds: []
            }
          },
          created() {
            this.movie = 0; 

            // default searchTerms
            // this.searchTerms.genre = "All";
            // this.searchTerms.page = 1;
            // this.searchTerms.ratings = [0, 10];
            // this.searchTerms.years = [1915, 2019];
            // this.searchTerms.keywords = "";
            // this.searchTerms.limit = 25;
          },
          // watch: {
          //   movie: function(oldVal, newVal) {
          //     console.log(oldVal, newVal);
          //   }
          // },
          methods: {
            updateMovieParent(value) {
              this.movie += value;
              console.log(this.movie);
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