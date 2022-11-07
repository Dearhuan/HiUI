<template>
  <teleport to='body'>
    <!-- Load page -->
    <div class="animationload" v-show="showAnimationload">
      <div class="loader">
      </div>
    </div>
    <!-- End load page -->

    <!-- Switcher -->
    <div class="switcher">
      <input id="sw" type="checkbox" class="switcher-value">
      <label for="sw" class="sw_btn" @click="toggleTheme"></label>
      <div class="bg"></div>
      <div class="text">Turn <span class="text-l">off</span><span class="text-d">on</span><br />the light</div>
    </div>
    <!-- End Switcher -->

    <!-- Content Wrapper -->
    <div id="wrapper">
      <div class="container">


        <!-- Dark version -->
        <div id="dark" class="row text-center">
          <div class="info">
            <img src="../assets/images/404-dark.png" alt="404 error" />
            <p>The page you are looking for was moved, removed,<br />
              renamed or might never existed.</p>
            <a href="/" class="btn">Go Home</a>
          </div>
        </div>
        <!-- End Dark version -->

        <!-- Light version -->
        <div id="light" class="row text-center">
          <!-- Info -->
          <div class="info">
            <img src="../assets/images/404-light.gif" alt="404 error" />
            <!-- end Rabbit -->
            <p>The page you are looking for was moved, removed,<br />
              renamed or might never existed.</p>
            <a href="/" class="btn">Go Home</a>
            <!--<a href="#" class="btn btn-brown">Contact Us</a>-->
          </div>
          <!-- end Info -->
        </div>
        <!-- End Light version -->

      </div>
      <!-- end container -->
    </div>
    <!-- end Content Wrapper -->
  </teleport>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showAnimationload = ref(true)

const isDark = ref(true)

onMounted(() => {
  setTimeout(() => {
    showAnimationload.value = false
  }, 1000);
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.body.className = isDark.value ? '' : 'light'
}

</script>

<style lang="scss">
*,
p {
  font-weight: 300
}

.btn,
.btn:hover {
  color: #fff;
  text-decoration: none
}

#wrapper,
body,
html {
  height: 100%
}

.container,
.info {
  position: relative
}

.btn,
.switcher {
  cursor: pointer
}

* {
  font-family: Raleway, Helvetica, Arial, sans-serif
}

body {
  background-color: #000c2f
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #fff
}

img {
  background-size: auto
}

.error {
  border-color: red !important
}

::-webkit-input-placeholder {
  color: #fff
}

:-moz-placeholder {
  color: #fff;
  opacity: 1
}

::-moz-placeholder {
  color: #fff;
  opacity: 1
}

:-ms-input-placeholder {
  color: #fff
}

.btn {
  font-size: 18px;
  font-weight: 600;
  border: 0 solid #ec9228;
  border-bottom: 2px solid;
  padding: 10px 41px;
  border-radius: 5px;
  background: #ffad32;
  text-transform: uppercase;
  display: inline-block;
  margin: 10px 20px 10px 0;
  -webkit-transition: all .5s ease-in-out;
  -moz-transition: all .5s ease-in-out;
  -ms-transition: all .5s ease-in-out;
  -o-transition: all .5s ease-in-out;
  transition: all .5s ease-in-out
}

.btn:hover {
  background: #ec9228
}

.btn-brown {
  border-color: #ec5900;
  background-color: #ff7000
}

.btn-brown:hover {
  background: #ec5900
}

#wrapper {
  min-height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  text-align: center;
}

#dark {
  display: block;
  visibility: visible
}

#light {
  display: none;
  visibility: hidden
}

body.light {
  background-color: #eaff6f
}

body.light #light {
  display: block;
  visibility: visible
}

body.light #dark {
  display: none;
  visibility: hidden
}

.info {
  z-index: 999;
  margin-top: 200px;
  margin-bottom: 60px
}

.info p {
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  color: #1b334d;
  margin: 30px 0
}

#light .info img {
  margin-left: -54px
}

#light .info {
  margin-top: 94px
}

.text-l {
  display: none
}

.light .text-l,
.text-d {
  display: inline-block
}

.light .text-d {
  display: none
}

.switcher {
  width: 185px;
  height: 84px;
  position: fixed;
  top: 60px;
  z-index: 11;
  left: 130px;
}

.switcher * {
  transition: all .2s;
  -moz-transition: all .2s;
  -webkit-transition: all .2s;
  -o-transition: all .2s;
  -ms-transition: all .2s
}

.switcher .sw_btn {
  background: url(../assets/images/btn.png) no-repeat;
  width: 42px;
  height: 45px;
  display: block;
  cursor: pointer;
  z-index: 1;
  position: absolute;
  top: 22px;
  left: 65px
}

.switcher .bg {
  background: url(../assets/images/bg_btn.png) no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0
}

.switcher input.switcher-value {
  display: none
}

.switcher input.switcher-value:checked~.sw_btn {
  margin-left: 55px
}

.switcher .text {
  color: #fff;
  font-size: 14px;
  position: absolute;
  left: -24px;
  top: 21px
}

.light .switcher .text {
  color: #343f69
}

.animationload {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 999999
}

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -100px 0 0 -100px;
  width: 200px;
  height: 200px;
  background-image: url(../assets/images/ajax-loader.gif);
  background-position: center;
  background-repeat: no-repeat
}

@media (max-width:1200px) {
  .info h1 {
    font-size: 110px
  }

  .info h2 {
    font-size: 55px;
    line-height: 55px
  }
}

@media (max-width:992px) {
  .info h1 {
    font-size: 56px;
    line-height: 36px;
    margin-top: 85px
  }

  .info h2 {
    font-size: 30px;
    line-height: 16px
  }

  #dark .info img,
  #light .info img {
    width: 480px
  }

  #light .info {
    margin-top: 154px
  }
}

@media (max-width:767px) {

  #dark .info img,
  #light .info img {
    width: 360px
  }

  .info {
    text-align: center
  }

  .info h1 {
    margin-top: 80px
  }

  .switcher {
    top: 20px
  }
}

@media (max-width:500px) {
  .info p {
    font-size: 16px
  }

  #dark .info img {
    width: 260px
  }

  #light .info img {
    width: 260px;
    margin-left: -24px
  }
}

@media (max-width:440px) {
  .info p br {
    display: none
  }

  .btn {
    display: block;
    margin: 20px
  }
}
</style>