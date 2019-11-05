<template>
    <div class="cardWrapper">
        <div class="cardHeadWrapper">
            <h1>Choose your movies</h1>
            <h3>They will be added to your playlist</h3>
            <v-text-field class="searchInput" placeholder="What movie are you looking for?"></v-text-field>
        </div>
        <div class="cardDisplayWrapper">            
        </div>
    </div>
</template>

<script>

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

    .searchInput {
        max-width: 300px;
    }

    .cardDisplayWrapper {
        margin-top: 40px;
        height: 300px;
        width: 300px;
        background-color: rgba(0, 0, 255, 0.267);
    }
</style>