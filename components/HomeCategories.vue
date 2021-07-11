<template>
  <div>
    <div class="container home__categories__wrap">
      <nuxt-link :to="'51'" class="home__categories__href">
        <div class="home__categories">
          <img
            src="https://damido.sk/themes/games/assets/img/steam.png"
            class="home__categories__img"
            style="opacity: 0.9"
          />
          <p class="h3 home__categories__title">Steam</p>
          <p class="home__categories__par">Steam platform</p>
        </div>
      </nuxt-link>
      <a href="29-xbox" class="home__categories__href">
        <div class="home__categories">
          <img
            src="https://damido.sk/themes/games/assets/img/xbox.png"
            class="home__categories__img"
            style="opacity: 0.8"
          />
          <p class="h3 home__categories__title">XBOX</p>
          <p class="home__categories__par">XBOX Console</p>
        </div>
      </a>
      <a href="38-psn" class="home__categories__href">
        <div class="home__categories">
          <img
            src="https://damido.sk/themes/games/assets/img/playstation.png"
            class="home__categories__img"
            style="opacity: 0.9; width: 110px; padding-bottom: 16px"
          />
          <p class="h3 home__categories__title">PlayStation</p>
          <p class="home__categories__par">PlayStation Console</p>
        </div>
      </a>
      <a href="28-origin" class="home__categories__href">
        <div class="home__categories">
          <img
            src="https://damido.sk/themes/games/assets/img/origin.png"
            class="home__categories__img"
            style="
              width: 132px;
              margin-top: 32px;
              padding-bottom: 30px;
              opacity: 0.8;
            "
          />
          <p class="h3 home__categories__title">Origin</p>
          <p class="home__categories__par">Origin platform</p>
        </div>
      </a>
      <a href="37-uplay" class="home__categories__href">
        <div class="home__categories">
          <img
            src="https://damido.sk/themes/games/assets/img/uplay.png"
            class="home__categories__img"
            style="
              width: 134px;
              margin-top: 22px;
              padding-bottom: 30px;
              opacity: 0.7;
            "
          />
          <p class="h3 home__categories__title">Uplay</p>
          <p class="home__categories__par">Ubisoft Distribution</p>
        </div>
      </a>
    </div>
    <!-- <div class="home__categories--gradient"></div> -->
  </div>
</template>

<script>
// import axios from "axios"

export default {
  data() {
    return {
      games: null,
      genre: 1,
    }
  },
}
</script>

<style lang="scss">
.home__categories__wrap {
  display: flex;
  justify-content: space-between;
  margin-top: -75px;
  z-index: 1;
  position: relative;
}

.home__categories {
  width: 235px; //215/235
  height: 238px;
  margin-bottom: 45px;
  background: #fff;
  padding: 15px 10px;
  border-radius: 10px 10px 0 0;
  border: 1px solid #f3f3f3;
  border-bottom: none;
  box-shadow: 0 -20px 20px 0 rgba(0, 0, 0, 0.15);
  text-align: center;
  transition: 0.8s;
  cursor: pointer;
}

.home__categories__img {
  width: 91px;
  margin-top: 15px;
  padding-bottom: 10px;
  margin-bottom: 4px;
}

.home__categories__href {
  text-decoration: none;
}

.home__categories__title {
  color: #495057;
  text-align: center;
  font-weight: 600;
  font-size: 15px;
  margin-top: 15px;
  text-transform: uppercase;
  margin-bottom: 3px !important;
}

.home__categories__par {
  font-weight: 300;
}

// .home__categories--gradient {
//     height: 30px;
//     background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
//     margin-top: -30px;
// }
</style>
