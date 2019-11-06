<template>
    <div class="cardWrapper">

<!-- TOP CONTENT -->

        <div class="cardHeadWrapper">
            <h1>Choose your movies</h1>
            <h3>They will be added to your playlist</h3>
        </div>
        <div class="cardOptionsWrapper">
            <v-text-field class="searchInput" placeholder="What movie are you looking for?"></v-text-field>
            <v-list class="sortBy"> 
                <v-list-group
                no-action
                >
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title>Sort by <strong>{{sortOptions[0]}}</strong></v-list-item-title>
                        </v-list-item-content>
                    </template>
            
                    <v-list-item
                        v-for="(option) in sortOptions"
                        :key="option"
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
                    src="movie.poster"
                ></v-img>
            
                <v-card-title class="movieTitle">{{movie.title}}</v-card-title>

                <v-card-text>
                    
                    <v-row
                    class="row"
                    >

                        <div class="releaseYear">{{movie.year}} /</div>

                        <v-rating
                            :value="4"
                            color="amber"
                            dense
                            half-increments
                            readonly
                            size="14"
                            class="ratingOnCard"
                        ></v-rating>
            
                    </v-row>
            
                    <div class="director">
                        Directed by Stanley Kubrick
                    </div>
            
                    <div class="synopsis">
                        {{movie.plot}}
                    </div>
                
                  

                    <v-chip-group
                    active-class="deep-purple accent-4 white--text"
                    class="movieGenre"
                    column
                    >
                    <v-chip>Horror</v-chip>
                    <v-chip>Thriller</v-chip>
            
                    </v-chip-group>

              
                    
                    <v-btn
                    color="deep-purple accent-4"
                    text
                    class="addButton"
                    id="button1"
                    @click="checkButtonType(1)"
                    v-if=""
                    >
                    {{buttonText}}
                    </v-btn>

                </v-card-text>
           
            </v-card>
       
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            moviesInPlaylist: Number,
            movieArray: {
                type: Array,
                //required: true
            }
        },
        data() {
            console.log(this.movieArray);
            return {
                sortOptions: [
                    "Highest Rating",
                    "Most Recent"
                ],
                buttonText: "+ Add to playlist",
            }
        },
        // created() {
        //     console.log("hello", this.moviesInPlaylist);
        // },
        methods: {
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
                    this.buttonText = '- Remove from playlist'
                }
                else {
                    this.removeFromPlaylist(movieId);
                    button.className = 'addButton v-btn v-btn--flat v-btn--text theme--light v-size--default deep-purple--text text--accent-4';
                    this.buttonText = "+ Add to playlist";
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
    }

    .cardDisplayWrapper {
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
        width: 100%;
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
    .removeButton {
        border: 1px solid rgba(255, 72, 0, 0.533) !important;
        background-color: rgba(255, 72, 0, 0.55);
        color: rgba(255, 255, 255, 1.0) !important; 
        border-radius: 30px;
        margin-left: 12px;
        margin-top: 10px;
    }
    .addButton:hover {
        background-color: rgba(255, 72, 0, 0.04);
    }
    .removeButton:hover {
        background-color: rgba(255, 72, 0, 0.7);
    }

</style>