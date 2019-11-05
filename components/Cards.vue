<template>
    <div class="cardWrapper">
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
        <div class="cardDisplayWrapper">
                <v-card
                :loading="loading"
                class="mx-auto my-12"
                max-width="300"
              >
                <v-img
                  height="300"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>
            
                <v-card-title class="movieTitle">The Shining</v-card-title>

                <div id="year" class="my-4 subtitle-1 black--text">1980</div>
            
                <v-card-text>
                  <v-row
                    :align="center"
                    class="mx-0"
                  >
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
            
                  <div class="my-4 subtitle-1 black--text">
                    Directed by Stanley Kubrick
                  </div>
            
                  <div>Small plates, salads & sandwiches an inteimate setting with 12 indoor seats plus patio seating.</div>
                </v-card-text>
            
                <v-card-text>

                  <v-chip-group
                    v-model="selection"
                    active-class="deep-purple accent-4 white--text"
                    column
                  >
                    <v-chip>Horror</v-chip>
                    <v-chip>Thriller</v-chip>
            
                  </v-chip-group>

                </v-card-text>
            
                <v-card-actions>
                    <v-btn
                    color="deep-purple accent-4"
                    text
                    @click="reserve"
                    >
                    + Add to playlist
                    </v-btn>
                </v-card-actions>
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
    }

    h1 {
        font-size: 26px;
    }
    h3 {
        font-size: 18px;
        font-weight: 10 !important;
    }

    .cardOptionsWrapper {
        display: flex;
    }
    .searchInput, .sortBy {
        max-width: 300px;
    }


    .cardDisplayWrapper {
        margin-top: 30px;
        height: 900px;
        width: 100%;
        background-color: rgba(0, 0, 255, 0.267);
    }
</style>