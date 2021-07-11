<template>
  <div id="cart">
    <MenuTop />
    <Header />
    <Breadcrumbs :items="breadcrumbs" />

    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25327.233292625184!2d17.09594348858746!3d48.144998283952006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDA4JzQ3LjAiTiAxN8KwMDYnMjguNSJF!5e0!3m2!1sen!2ssk!4v1621959792059!5m2!1sen!2ssk"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>

    <v-container>
      <v-row>
        <v-col>
          <div class="c-contact__main">
            <div class="c-contact__main-content">
              <h1 class="c-contact__title">Kontakt</h1>

              <div class="c-contact__section">
                <strong>Informácie k online objednávkam</strong><br />
                <a href="tel:+421220620760" class="c-contact__phone">
                  <svg
                    width="14"
                    height="22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 0H3C1.34 0 0 1.34 0 3v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zM9 20H5v-1h4v1zm3.25-3H1.75V3h10.5v14z"
                    ></path></svg
                  >+421 2 206 207 60 </a
                ><br />
                <span class="c-contact__phone">
                  <svg
                    class="u-ml-0"
                    width="22"
                    height="22"
                    role="presentation"
                  >
                    <use
                      xlink:href="/images/sprite.svg?v=19#icon-calendar"
                    ></use></svg
                  ><strong>Po-Pia:</strong> 8:00 - 16:30 hod. </span
                ><br />
                <a
                  href="mailto:objednavky@bodyworld.eu"
                  class="c-contact__email u-text-link"
                >
                  <svg
                    width="20"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    class="u-align-middle"
                  >
                    <path
                      d="M18 0H2C.9 0 .01.9.01 2L0 14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 14H2V4l8 5 8-5v10zm-8-7L2 2h16l-8 5z"
                    ></path></svg
                  >objednavky@bodyworld.eu
                </a>
              </div>

              <div class="c-contact__section">
                <div class="c-contact__subsection">
                  <strong>Adresa predajne</strong><br />
                  BodyWorld - svet doplnkov výživy<br />
                  Elektrárenská 1<br />
                  83104 Bratislava<br />
                  <a
                    href="https://goo.gl/maps/RtDm8UU1vCQVnuFLA"
                    target="_blank"
                    class="u-text-link"
                    >Zobraziť na Google Maps</a
                  >
                </div>

                <div class="c-contact__subsection">
                  <strong>Predajňa Bratislava - Centrála</strong><br />
                  +421 917 556 433 (počas otváracích hodín)<br />
                  <a class="u-text-link" href="mailto:info@bodyworld.eu"
                    >info@bodyworld.eu</a
                  >
                </div>
              </div>

              <div class="c-contact__gallery">
                <img
                  src="/images/articles/store-bratislava.jpg"
                  alt="Predajňa Bratislava - Centrála"
                />
              </div>

              <div class="c-contact__section">
                <h2 class="c-contact__subtitle">Otváracie hodiny</h2>

                <table class="c-contact__opens">
                  <tbody>
                    <tr class="">
                      <td>Pondelok</td>
                      <td>10:00 – 18:00</td>
                    </tr>
                    <tr class="">
                      <td>Utorok</td>
                      <td>10:00 – 18:00</td>
                    </tr>
                    <tr class="">
                      <td>Streda</td>
                      <td>10:00 – 18:00</td>
                    </tr>
                    <tr class="">
                      <td>Štvrtok</td>
                      <td>10:00 – 18:00</td>
                    </tr>
                    <tr class="">
                      <td>Piatok</td>
                      <td>10:00 – 18:00</td>
                    </tr>
                    <tr class="is-active">
                      <td>Sobota</td>
                      <td>09:00 – 14:00</td>
                    </tr>
                    <tr class="">
                      <td>Nedeľa</td>
                      <td>zatvorené</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <Footer />
  </div>
</template>

<script>
// import { mapState } from 'vuex'
// import axios from "axios";
import Header from "~/components/Header.vue"
import MenuTop from "~/components/MenuTop.vue"
import Breadcrumbs from "~/components/Breadcrumbs.vue"
import Footer from "~/components/Footer.vue"

export default {
  components: {
    MenuTop,
    Header,
    Breadcrumbs,
    Footer,
  },

  data() {
    return {}
  },

  computed: {
    breadcrumbs() {
      const links = [
        {
          link: "/cart/",
          text: "Shopping Cart",
        },
      ]
      return links
    },
  },

  // watches for this.orders changes
  watch: {},

  // calculates totals on page load
  mounted: {},

  methods: {},
}
</script>

<style lang="scss">
.mapouter {
  position: relative;
  text-align: right;
  height: 500px;
  width: 100%;
  margin-top: -20px;
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 500px;
  width: 100%;
}

.c-contact__main {
  width: 430px;
  margin-top: -470px;
  background: #fff;
  box-shadow: 0 40px 80px rgb(0 0 0 / 25%);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.c-contact__main-content {
  padding: 55px;
}

.c-contact__section {
  padding: 30px 0;
  font-size: 16px;
  line-height: 27.2px;
  font-size: 1rem;
  line-height: 1.7rem;
  font-family: Arial, sans-serif;
  color: #000;
}
</style>
