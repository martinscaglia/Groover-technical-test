<template>
    <div id="listBar" class="listBar">
        <div v-if="parseInt(moviesInPlaylistCount) == 1" 
            class="listLabel">
            Your playlist contains {{parseInt(moviesInPlaylistCount)}} movie
        </div>
        <div v-if="parseInt(moviesInPlaylistCount) > 1" 
            class="listLabel">
            Your playlist contains {{parseInt(moviesInPlaylistCount)}} movies
        </div>
        <div class="moviePosters">
            <div v-for="movie in moviesInPlaylistArray.slice(0,9)">
                <v-img
                class="moviePoster"
                width="36"
                :src="movie.poster"
                ></v-img>
            </div>
            <div v-if="moviesInPlaylistArray">
                <div v-if="moviesInPlaylistArray.length > 9">
                    <div class="listLabel2">
                        and more..
                    </div>
                </div>
            </div>
        </div> 
        <v-spacer></v-spacer>
        <v-btn class="watchNowButton" text>Watch now</v-btn>
    </div>
</template>

<script>
export default {
    props: {
        moviesInPlaylistCount: Number,
        moviesInPlaylistArray: Array,
    },
};
</script>

<style>
  
    .listBar {
        display: flex;
        width: 100%;
        height: 70px;
        display: flex;
        padding: 10px;
        background-color: white;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
        z-index: 100;
    }

    .listLabel, .listLabel2 {
        top: 40%;
        margin-left: 30px;
        position: absolute;
        font-size: 18px;
        font-weight: 600;
    }
    .listLabel2 {
        margin-left: 10px;
    }
    .watchNowButton {
        margin-top: 3px;
        margin-right: 35px;
        height: 46px !important;
        border: 1px solid rgba(255, 72, 0, 0.733);
        border-radius: 30px !important;
        color: rgba(255, 72, 0, 0.733) !important; 
    }
    .watchNowButton:hover {
        background-color: rgba(255, 72, 0, 0.04);
    }
    .moviePosters {
        display: flex;
        margin-left: 330px;
        margin-top: -2px;
    }
    .moviePoster {
        margin-right: 10px;
    }

</style>