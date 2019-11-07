<template>
    <div class="cardWrapper">

<!-- TOP CONTENT -->

        <div class="cardHeadWrapper">
            <h1>Choose your movies</h1>
            <h3>They will be added to your playlist</h3>
        </div>
        <div class="cardOptionsWrapper">
            <v-text-field 
                v-on:keyup="keywordSearch()"
                v-model="searchTerms.keywords"
                class="searchInput" 
                placeholder="What movie are you looking for?">
            </v-text-field>
            <v-list class="sortBy"> 
                <v-list-group
                no-action
                >
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title id="sortLabel">Sort by <strong>{{sortOptions[0]}}</strong></v-list-item-title>
                        </v-list-item-content>
                    </template>
            
                    <v-list-item
                        v-for="(option) in sortOptions"
                        :key="option"
                        @change="sort(option)"
                        link
                    >
                        <v-list-item-title v-text="option"></v-list-item-title>
                    </v-list-item>
                </v-list-group>
        
            </v-list>
        </div>

<!-- CARD DISPLAY -->

        <div class="cardDisplayWrapper">
             
            <v-card
            v-for="movie in movieArray"
            :key="movie.imdbId"
            :id="movie.imdbId"
            class="v-card"
            max-width="300"
            >
                <v-img
                width="430"
                :src="movie.poster"
                ></v-img>
            
                <v-card-title class="movieTitle">
                    <div v-if="movie.title.length<22">{{movie.title}}</div>
                    <div v-else>{{ movie.title.substring(0,22)+".." }}</div>
                </v-card-title>

                <v-card-text>
                    
                    <v-row
                    class="row"
                    >

                    <div class="releaseYear">{{movie.year}} /</div>

                    <v-rating
                    :value="movie.rating / 2"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                    class="ratingOnCard"
                    ></v-rating>
            
                    </v-row>
            
                    <div v-if="fetchDirector(movie.imedbId)" class="director">Directed by {{ director }}</div>
            
                    <div class="synopsis">
                    <div v-if="movie.plot.length<194">{{movie.plot}}</div>
                    <div v-else>{{ movie.plot.substring(0,194)+".." }}</div>
                    </div>

                    <v-chip-group
                    active-class="deep-purple accent-4 white--text"
                    class="movieGenre"
                    row
                    >
                    <v-chip v-for="genre in movie.genres.slice(0,3)" :key="movie.imdbId + genre">{{genre}}</v-chip>
            
                    </v-chip-group>
                    
                    <v-btn
                    color="deep-purple accent-4"
                    text
                    class="addButton"
                    v-bind:id="`button${movie.imdbId}`"
                    @click="checkButtonType(movie.imdbId)"
                    >
                    + Add to playlist
                    </v-btn>

                </v-card-text>
           
            </v-card>
       
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        props: {
            moviesInPlaylist: Number,
            movieArray: {
                type: Array,
                required: true
            },
            searchTerms: {
                type: Object,
                required: true
            },
            getMovies: Function
        },
        data() {
            return {
                sortOptions: [
                    "Highest Rating",
                    "Most Recent"
                ],
                director: '',
            }
        },
        mounted() {
            this.scroll();
        },
        methods: {
            async fetchDirector(movieId) {
                try {
                    await axios.post(`http://www.omdbapi.com/?i=${movieId}&apikey=bb5842e5`)
                    .then((res) => {
                        return ( res.data.Director );
                    })
                } catch(err) {
                    console.log(err);
                }
            },
            keywordSearch() {
                this.searchTerms.genre = 'All';
                this.searchTerms.page = 1;
                this.getMovies(this.searchTerms);
            },
            sort(param) {
                var sortLabel = document.getElementById('sortLabel');
                if (sortLabel.innerText != "Sort by " + param) {
                    if (param == "Highest Rating") {
                    this.searchTerms.sort = 'rating';
                    } else {
                        this.searchTerms.sort = 'year';
                    }
                    this.searchTerms.page = 1;
                    let tmp = this.sortOptions[0];
                    this.sortOptions[0] = this.sortOptions[1];
                    this.sortOptions[1] = tmp;
                    this.getMovies(this.searchTerms);
                }
            },
            scroll() {
                window.onscroll = async () => {
                    const bottom =
                        document.documentElement.scrollTop + document.documentElement.clientHeight >=
                        document.documentElement.scrollHeight - 100;
                    if (bottom) {
                        const params = this.searchTerms;
                        params.page++;
                        await this.getMovies(params);
                    }
                };
            },
            addToPlaylist(movieId) {
                this.$emit("updateMovie", 1);
                //add to movie array
            },
            removeFromPlaylist(movieId) {
                this.$emit("updateMovie", -1);
                //remove from array
            },
            checkButtonType(movieId) {
                var button = document.getElementById('button' + movieId);
                if (button.className.replace(/ .*/,'') == 'addButton') {
                    this.addToPlaylist(movieId);
                    button.className = 'removeButton v-btn v-btn--flat v-btn--text theme--light v-size--default deep-purple--text text--accent-4';
                    button.innerText = '- Remove from playlist'
                }
                else {
                    this.removeFromPlaylist(movieId);
                    button.className = 'addButton v-btn v-btn--flat v-btn--text theme--light v-size--default deep-purple--text text--accent-4';
                    button.innerText = "+ Add to playlist";
                }
            }
        }
    }
</script>

<style>

    .cardWrapper {
        display: block;
        margin-left: 5px;
    }

    .cardHeadWrapper {
        margin-top: 5px;
    }
    h1 {
        font-size: 24px;
    }
    h3 {
        font-size: 15px;
        font-weight: 10 !important;
    }

    .cardOptionsWrapper {
        display: flex;
        margin-top: 10px;
    }

    .searchInput, .sortBy {
        max-width: 300px;
        min-width: 200px;
    }
    .sortBy {
        border-radius: 30px !important;
        background-color: rgba(255, 255, 255, 0) !important;
    }

    .cardDisplayWrapper {
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
        width: 105%;
    }
    .v-card {
        margin-right: 40px;
        margin-bottom: 40px;
    }

    .row {
        margin-top: -5px;
        margin-bottom: 12px;
        margin-left: 0px;
    }
    .director {
        font-weight: 700;
    }
    .synopsis {
        font-style: italic;
    }

    .mx-0 {
        margin-left: 0px;
    }
    .ratingOnCard {
        margin-left: 5px;
    }

    .movieGenre {
        margin-top: 5px;
    }
    .addButton {
        border: 1px solid rgba(255, 72, 0, 0.533) !important;
        color: rgba(255, 72, 0, 0.733) !important; 
        border-radius: 30px;
        margin-left: 40px;
        margin-top: 10px;
    }
    .addButton:hover {
        background-color: rgba(255, 72, 0, 0.04);
    }
    .removeButton {
        border: 1px solid rgba(255, 72, 0, 0.533) !important;
        background-color: rgba(255, 72, 0, 0.55);
        color: rgba(255, 255, 255, 1.0) !important; 
        border-radius: 30px;
        margin-left: 12px;
        margin-top: 10px;
    }
    .removeButton:hover {
        background-color: rgba(255, 72, 0, 0.7);
    }

</style>