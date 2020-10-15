<template>
    <div class="header">
        <div id="nav" class="flex items-center">
            <router-link class="nav-item" to="/">
                <img class="logo" src="@/assets/img/marvel-logo.svg" alt="Marvel Logo">
            </router-link>
            <router-link class="nav-item" to="/characters">Characters</router-link>
            <router-link class="nav-item" to="/comics">Comics</router-link>
            <router-link class="nav-item" to="/stories">Stories</router-link>
            <router-link class="nav-item" to="/creators">Creators</router-link>
        </div>
    </div>
</template>
<script>

</script>
<style lang="scss">
@import '@/assets/sass/_variables.scss';
.header{
    position: fixed;
    top: 0;
    width: 100%;
    background-color: $purple;
    color: white;
    box-shadow: 0px 4px 10px $navy;
    #nav{
        display: flex;
        max-width: $laptop;
        margin: auto;
        padding: 15px;
        .logo{
            max-width: 100px;
            margin-right: 80px;
        }
        .nav-item{
            margin-right: 50px;
            text-transform: uppercase;
            font-family: $roboto;
            font-weight: 500;
            font-size: 12px;
        }
    }
}
</style>
