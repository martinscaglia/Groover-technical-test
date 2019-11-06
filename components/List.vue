<template>
    <div id="listBar" class="listBar">
        <div v-if="parseInt(moviesInPlaylist) == 1" class="listLabel">Your playlist contains {{parseInt(moviesInPlaylist)}} movie</div>
        <div v-if="parseInt(moviesInPlaylist) > 1" class="listLabel">Your playlist contains {{parseInt(moviesInPlaylist)}} movies</div>
        <v-spacer></v-spacer>
        <v-btn class="watchNowButton" text>Watch now</v-btn>
    </div>
</template>

<script>
export default {
    props: {
            moviesInPlaylist: Number,
        },
  mounted() {
    
  },
  methods: {
   
  }
};
</script>

<style>
  
    .listBar {
        /* position: sticky; */
        display: flex;
        width: 100%;
        height: 70px;
        display: flex;
        padding: 10px;
        background-color: white;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
        /* margin-top: 4px; */
        /* top: 0px; */
        z-index: 100;
    }

    .listLabel {
        top: 40%;
        margin-left: 30px;
        position: absolute;
        font-size: 18px;
        font-weight: 600;
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

</style>