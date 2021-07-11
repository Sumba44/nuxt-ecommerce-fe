<template>
  <!-- Footer -->
  <footer>
    <div class="footer__top bg-dark">
      <div class="container">
        <div class="row py-4 align-items-center justify-content-between">
          <div class="col-md-6 col-lg-4 text-center text-md-left mb-4 mb-md-0">
            <span>Get connected with us on social networks!</span>
          </div>
          <div class="col-md-6 text-center text-md-right">
            <a class="footer__social">
              <font-awesome-icon
                :icon="['fab', 'facebook']"
                class="footer__social-icon"
              />
            </a>
            <a class="footer__social">
              <font-awesome-icon
                :icon="['fab', 'instagram']"
                class="footer__social-icon"
              />
            </a>
            <a class="footer__social">
              <font-awesome-icon
                :icon="['fab', 'youtube']"
                class="footer__social-icon"
              />
            </a>
            <a class="footer__social">
              <font-awesome-icon
                :icon="['fab', 'linkedin']"
                class="footer__social-icon"
              />
            </a>
            <a class="footer__social">
              <font-awesome-icon
                :icon="['fab', 'twitter']"
                class="footer__social-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mb-4">
          <h6>Company name</h6>
          <hr />
          <p>
            Here you can use rows and columns here to organize your footer
            content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div class="col-md-3 mb-4">
          <h6>Products</h6>
          <hr />
          <p>
            <a href="#!">MDBootstrap</a>
          </p>
          <p>
            <a href="#!">MDWordPress</a>
          </p>
          <p>
            <a href="#!">BrandFlow</a>
          </p>
          <p>
            <a href="#!">Bootstrap Angular</a>
          </p>
        </div>
        <div class="col-md-3 col-lg-3 col-xl-3 mb-4">
          <h6>Useful links</h6>
          <hr />
          <p>
            <a href="#!">Your Account</a>
          </p>
          <p>
            <a href="#!">Become an Affiliate</a>
          </p>
          <p>
            <a href="#!">Shipping Rates</a>
          </p>
          <p>
            <a href="#!">Help</a>
          </p>
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3 mb-4">
          <h6>Contact</h6>
          <hr />
          <p>
            <font-awesome-icon
              :icon="['fas', 'home']"
              class="footer__icon"
            />Barcelona, Spain
          </p>
          <p>
            <font-awesome-icon
              :icon="['fas', 'globe']"
              class="footer__icon"
            />Vienna, Austria
          </p>
          <p>
            <font-awesome-icon :icon="['fas', 'phone']" class="footer__icon" />+
            01 234 567 88
          </p>
          <p>
            <font-awesome-icon
              :icon="['fas', 'envelope']"
              class="footer__icon"
            />info@dedfx.com
          </p>
        </div>
      </div>
    </div>
    <div class="footer-copyright text-center py-3">
      <div class="copyright">&copy; 2020 Copyright: DEDFX || dedfx.com</div>
    </div>
  </footer>
  <!-- Footer -->
</template>

<style lang="scss">
// .footer__top {
//   background-color: #;
// }
footer {
  background: #1e1e24;
  color: #fff;

  h6 {
    font-weight: 500;
    font-size: 19px;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 0;
    padding-bottom: 0;
    margin-top: 20px;
  }

  p {
    color: #fff;
    font-weight: 300;
  }

  a {
    color: #fff;
  }

  .copyright {
    font-size: 13px;
    color: #aaa;
  }

  hr {
    width: 60px;
    margin-top: 10px;
    margin-bottom: 25px;
    background: $vue;
  }
}

.footer__social-icon {
  color: #fff;
  font-size: 30px;
  margin-left: 18px;

  @media (max-width: 575.98px) {
    margin-left: 0;
  }
}

.footer__icon {
  margin-right: 8px;
}
</style>
