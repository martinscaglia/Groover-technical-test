<template>
    <div class="listBar">
        <div class="listLabel">Your playlist contains 2 movies</div>
        <v-spacer></v-spacer>
        <!-- <v-toolbar-items> -->
                <v-btn class="watchNowButton" text>Watch now</v-btn>
        <!-- </v-toolbar-items> -->
    </div>
</template>

<style>
  
    .listBar {
        position: relative;
        display: flex;
        width: 100%;
        height: 70px;
        display: flex;
        padding: 10px;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
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