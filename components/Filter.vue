<template>
    <!-- V-APP -->
    <v-app class="filterApp">
        <div class="filterContainer">
            <!-- GENRES BLOCK -->
            <div class="filterBlock">
                <div class="genreTitle">Genre</div>
                <v-chip-group
                    column
                    active-class=""
                    >
                    <v-chip 
                        class="chip"
                        v-for="genre in genres"
                        :key="genre" 
                        @click="updateGenres(genre)">
                        {{ genre }}
                    </v-chip>
                </v-chip-group>
            </div>
            <!-- YEAR RANGE BLOCK -->
            <div id="year" class="filterBlock">
                <div class="yearTitle">Year</div>
                <v-range-slider
                    v-model="range"
                    :max="2019"
                    :min="1915"
                    :thumb-size="34"
                    :color="sliderStyle.color"
                    :track-color="sliderStyle.trackColor"
                    :thumb-color="sliderStyle.color"
                    thumb-label="always"
                    :enable-cross=false
                    class="rangeSlider"
                    @change="updateYearRange(range[0], range[1])"
                >
                </v-range-slider>
            </div>
            <!-- STARS RATING BLOCK -->
            <div class="filterBlock">
                <div class="genreTitle">Rating</div>
                <div @click="updateRating()">
                    <v-rating
                    color="rgba(255, 72, 0, 0.733)" 
                    v-model="rating">
                    </v-rating>
                </div>
            </div>
        </div>
        <!-- CLEAR FILTERS BUTTON -->
        <v-btn
            v-if="filterModified"
            text
            class="clearButton"
            @click="clearFilters()"
            >
            x Clear filters
        </v-btn>
    </v-app>
</template>

<script>
    export default {
        props: {
            getMovies: Function,
            searchTerms: {
                type: Object,
                required: true
            },
        },
        data: () => ({
            rating: 5,
            range: [1915, 2019],
            genres: [
                "Action",
                "Adventure",
                "Animation",
                "Comedy",
                "Crime",
                "Documentary",
                "Drama",
                "Family",
                "Fantasy",
                "History",
                "Horror",
                "Music",
                "Mystery",
                "Romance",
                "Sport",
                "Thriller",
                "War",
                "Western"
            ],
            sliderStyle: { 
                trackColor: 'rgba(0, 0, 0, 0.12)', 
                color: 'rgba(255, 72, 0, 0.733)'
            },
            filterModified: false,
        }),
        methods: {
            updateGenres(genre) {
                this.searchTerms.genre = genre;
                this.searchTerms.page = 1;
                this.getMovies(this.searchTerms);
                this.filterModified = true;
            },
            updateYearRange(r1, r2) {
                this.searchTerms.years = [r1, r2];
                this.searchTerms.page = 1;
                this.getMovies(this.searchTerms);
                this.filterModified = true;
            },
            updateRating() {
                this.searchTerms.page = 1;
                this.searchTerms.ratings = [0, (this.rating * 2)];
                this.getMovies(this.searchTerms);
                this.filterModified = true;
            },
            clearFilters() {
                this.searchTerms.genre = "All";
                this.searchTerms.years = [1915, 2019];
                this.searchTerms.page = 1;
                this.searchTerms.ratings = [0, 10];
                this.range = [1915, 2019];
                this.rating = 5;
                this.filterModified = false;
                this.getMovies(this.searchTerms);
            }
        },
    };

</script>

<style>
    .filterApp {
        margin-top: -5px;
        height: 600px;
        background-color: rgba(255, 255, 255, 0) !important;
    }
    .filterContainer {
        width: 220px;
    }
    .filterBlock {
        margin-top: 10px;
    }
    .chip {
        margin-left: 7px;
        margin-top: 7px;
        border: 1px solid rgba(255, 72, 0, 0.933) !important;
        background-color: rgba(255, 255, 255, 0) !important;
    }
    .chip:hover {
        background-color: rgba(255, 72, 0, 0.09) !important;
    }
    #year {
        margin-top: 40px;
    }
    .genreTitle, .yearTitle {
        font-size: 18px;
        font-weight: 700;
    }
    .yearTitle {
        margin-bottom: 40px;
    }
    .rangeSlider {
        margin-left: 7px;
        width: 210px;
    }
    .stars {
        background-color: rgba(255, 72, 0, 0.733) !important;
    }
    .clearButton {
        border: 1px solid rgba(255, 72, 0, 0.533) !important;
        color: rgba(255, 72, 0, 0.733) !important; 
        border-radius: 30px;
        margin-left: 5px;
        margin-top: 35px;
    }
    .clearButton:hover {
        background-color: rgba(255, 72, 0, 0.04);
    }
</style>