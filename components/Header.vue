<template>
  <div class="header__bg">
    <div class="nuxt__slider">
      <div style="width: 100%; display: inline-block">
        <div class="nuxt-slider__parent">
          <div class="nuxt-slider__child"></div>
        </div>
      </div>
      <div class="nuxt__slider__wrap">
        <div class="container">
          <v-row class="align-items-center justify-space-between">
            <div class="nuxt-slider__content">
              <h4>Gamers This Is For You</h4>

              <h3>Built for true gaming lovers</h3>

              <h5>
                Built for gamers, eSports fans, game fans &amp; true gaming
                lovers
              </h5>

              <a href class="btn btn-orange" tabindex="0">BUY GAMES</a>
            </div>
            <div class="nuxt-slider__right">
              <img src="~/assets/img/bg_small.jpg" />
            </div>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
header {
  margin-bottom: -48px;
  position: relative;
  z-index: 9;
  box-shadow: none;
  padding: 10px;
  color: #fff;

  a {
    color: rgba(255, 255, 255, 0.849) !important;
    text-decoration: none;
    font-size: 22px;
    font-weight: 300;
    display: flex;
    align-items: center;

    &:hover {
      color: #fff;
      text-decoration: none;
    }
  }
}

.header__bg {
  color: #fff;

  h3 {
    font-size: 44px;
    margin: 0px 0px 20px;
  }

  h4 {
    color: $theme;
    font-size: 21px;
  }

  h5 {
    color: #b7b9bd;
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 45px;
  }
}

.nuxt__slider {
  position: relative;
}

.nuxt__slider__wrap {
  position: absolute;
  top: 10%;
  width: 100%;
}

.nuxt-slider__parent {
  width: 100%;
  height: 178px;
  overflow: hidden;
}

.nuxt-slider__child {
  width: 100%;
  height: 100%;
  background-color: black; /* fallback color */
}

.nuxt-slider__content {
  display: none;
  align-items: center;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
}

.nuxt-slider__right {
  display: none;
}

#index {
  .nuxt-slider__right {
    display: block;
  }

  .nuxt-slider__content {
    display: flex;
  }

  .nuxt-slider__parent {
    height: 600px;
  }
}
</style>
