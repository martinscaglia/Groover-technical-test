<template>
    <div class="filterContainer">
        <div class="filterBlock">
            <div class="genreTitle">Genre</div>
            <v-chip class="chip" v-for="genre in genres" :key="genre">{{ genre }}</v-chip>
            <!-- <hr> -->
        </div>
        <div id="year" class="filterBlock">
            <div class="genreTitle">Year</div>
            <v-range-slider v-model="rangeValue" @change="updateResults"></v-range-slider>
            <!-- <hr> -->
        </div>
        <div class="filterBlock">
            <div class="genreTitle">Rating</div>
            <v-rating color="rgba(255, 72, 0, 0.733)" v-model="rating"></v-rating>
            <!-- <hr> -->
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                rating: 5,
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
                rangeValue: [1915, 2019]
    };
  },
  methods: {
    
  },
  beforeMount() {
    
  }
};
    
</script>

<style>

    .filterContainer {
        width: 220px;
    }

    .filterBlock {
        margin-top: 10px;
    }

    #year {
        margin-top: 30px;
    }

    hr {
        margin-top: 5px;
        border-top: 1px solid #00000041;
        width: 170px;
    }

    .genreTitle {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    .chip {
        margin-left: 10px;
        border: 1px solid rgba(255, 72, 0, 0.733) !important;
        background-color: rgba(255, 255, 255, 0) !important;
    }
    .chip:hover {
        background-color: rgba(255, 72, 0, 0.06) !important;
    }

    .stars {
        background-color: rgba(255, 72, 0, 0.733) !important;
    }

</style>