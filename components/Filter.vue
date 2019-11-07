<template>
        <v-app class="filterApp">
    <div class="filterContainer">
        <div class="filterBlock">
            <div class="genreTitle">Genre</div>
            <v-chip class="chip" v-for="genre in genres" :key="genre" @click="updateGenres(genre)">{{ genre }}</v-chip>
        </div>
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
</v-app>
</template>

<script>
    export default {
        props: {
            searchTerms: {
                type: Object,
                required: true
            },
            getMovies: Function
        },
        data: () => ({
            rating: 5,
            range: [1935, 1999],
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
            sliderStyle: { trackColor: 'rgba(0, 0, 0, 0.12)', color: 'rgba(255, 72, 0, 0.733)' },
        }),
        methods: {
            updateGenres(genre) {
                this.searchTerms.genre = genre;
                this.searchTerms.page = 1;
                this.getMovies(this.searchTerms);
            },
            updateYearRange(r1, r2) {
                let newRange = [r1, r2];
                this.searchTerms.years = newRange;
                this.searchTerms.page = 1;
                this.getMovies(this.searchTerms);
            },
            updateRating() {
                this.searchTerms.page = 1;
                this.searchTerms.ratings = [0, (this.rating * 2)];
                this.getMovies(this.searchTerms);
            }
        },
        beforeMount() {
        }
    };

</script>

<style>
    .filterApp {
        height: 600px;
        background-color: rgba(255, 255, 255, 0) !important;
    }
    .filterContainer {
        width: 220px;
    }

    .filterBlock {
        margin-top: 10px;
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

    .chip {
        margin-left: 7px;
        margin-top: 7px;
        border: 1px solid rgba(255, 72, 0, 0.933) !important;
        background-color: rgba(255, 255, 255, 0) !important;
    }

    .chip:hover {
        background-color: rgba(255, 72, 0, 0.09) !important;
    }

    .stars {
        background-color: rgba(255, 72, 0, 0.733) !important;
    }
</style>