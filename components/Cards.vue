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
                                <v-list-item-title>Sort by</v-list-item-title>
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
            :loading="loading"
            class="x-auto my-12"
            max-width="300"
            >
                <v-img
                    width="430"
                    src="https://yts.lt/assets/images/movies/7_days_to_vegas_2019/large-cover.jpg"
                ></v-img>
            
                <v-card-title class="movieTitle">The Shining</v-card-title>

                <v-card-text>
                    
                    <v-row
                    :align="center"
                    class="row"
                    >

                        <div class="releaseYear">1980 /</div>

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
                        Small plates, salads & sandwiches an inteimate setting with 12 indoor seats plus patio seating.
                    </div>
                
                    <!-- CHIPS -->

                    <v-chip-group
                    active-class="deep-purple accent-4 white--text"
                    class="movieGenre"
                    column
                    >
                    <v-chip>Horror</v-chip>
                    <v-chip>Thriller</v-chip>
            
                    </v-chip-group>

                    <!-- BUTTON -->
                    
                    <v-btn
                    color="deep-purple accent-4"
                    text
                    class="addButton"
                    @click="addToPlaylist"
                    >
                    + Add to playlist
                    </v-btn>

                </v-card-text>
           
            </v-card>            
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                sortOptions: [
                    "Best rated",
                    "Most Recent"
                ]
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
        margin-top: 10px;
        height: 1020px;
        width: 100%;
        overflow: scroll;
        background-color: rgba(0, 0, 255, 0.267);
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

</style>