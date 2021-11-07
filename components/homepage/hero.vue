<template>
    <section class="homepage_hero">
      <div class="content_container">
        <h6>{{ $t('home.hero_top_text') }}</h6>
        <vue-typed-js :typeSpeed="30" :showCursor="false" :strings="[ $t('home.hero_heading') ]">
          <h1 class="main_hero_heading typing"></h1>
        </vue-typed-js>
        <transition name="fade" class="hero_content" >
          <p v-if="show_hero_content">{{ $t('home.hero_content') }}</p>
        </transition>
        <a href="#" class="homepage_hero_cta">
          <span>{{ $t('home.hero_work_btn') }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.2928932,12 L13.1464466,8.85355339 C12.9511845,8.65829124 12.9511845,8.34170876 13.1464466,8.14644661 C13.3417088,7.95118446 13.6582912,7.95118446 13.8535534,8.14644661 L17.8535534,12.1464466 C18.0488155,12.3417088 18.0488155,12.6582912 17.8535534,12.8535534 L13.8535534,16.8535534 C13.6582912,17.0488155 13.3417088,17.0488155 13.1464466,16.8535534 C12.9511845,16.6582912 12.9511845,16.3417088 13.1464466,16.1464466 L16.2928932,13 L7.5,13 C7.22385763,13 7,12.7761424 7,12.5 C7,12.2238576 7.22385763,12 7.5,12 L16.2928932,12 Z M12.5,22 C7.25329488,22 3,17.7467051 3,12.5 C3,7.25329488 7.25329488,3 12.5,3 C17.7467051,3 22,7.25329488 22,12.5 C22,17.7467051 17.7467051,22 12.5,22 Z M12.5,21 C17.1944204,21 21,17.1944204 21,12.5 C21,7.80557963 17.1944204,4 12.5,4 C7.80557963,4 4,7.80557963 4,12.5 C4,17.1944204 7.80557963,21 12.5,21 Z"></path></svg>
        </a>
      </div>
      <div class="content_footer">
        <div class="lang_switcher">
            <nuxt-link
            v-for="locale in showallLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"><span  @click="show_hero_content = !show_hero_content">{{ locale.code }}</span></nuxt-link>
        </div>
        <div class="social_links">
            <a href="#"> <font-awesome-icon :icon="['fab', 'linkedin']"   /> </a>
            <a href="#"> <font-awesome-icon :icon="['fab', 'instagram']" /> </a>
        </div>
      </div>

    </section>
</template>

<style scoped>
  .homepage_hero{
    color:#fff;
    margin-top:-88px;
    min-height:100vh;
    background-color: transparent;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    background-image: url(~assets/images/cropped-welcome-background.png);
    background-position: center center;
    background-repeat: no-repeat;
  }

  .homepage_hero:after{
    content: '';
    background-image: radial-gradient(at center center, #002B64 0%, #010408 105%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .main_hero_heading{
    min-height:164px;
    max-width:586px;
    margin: 0 auto 12px auto;
  }

  .homepage_hero .content_container{
    max-width:620px;
    text-align: center;
  }

  .homepage_hero .content_container .homepage_hero_cta{
    margin-top:50px;
    display: block;
    height:30px;
    color:#fff;
    font-weight:700;
  }

  .homepage_hero .content_container .homepage_hero_cta svg{
    margin-left: 8px;
  }

  .homepage_hero .content_container h6{
     margin-bottom: 1.5em;
    color: #B2B2B2;
  }

  .homepage_hero .content_footer{
    position: absolute;
    bottom: 0;
    width:100%;
    padding: 40px 63px 40px 64px;
    display:flex;
    flex-flow: wrap;
    justify-content: space-between;
  }

  .homepage_hero .content_footer .lang_switcher{
    display: flex;
    column-gap: 10px;
    flex-flow: row-reverse;
  }

  .homepage_hero .content_footer .lang_switcher a{
    color: #fff;
    opacity:0.35;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.875em;
  }

  .homepage_hero .content_footer .lang_switcher a:hover{
    text-decoration: none;
    opacity:1;
  }

  .homepage_hero .content_footer .lang_switcher a.nuxt-link-exact-active{
    color:var(--global-primary-color);
    opacity:1;
    pointer-events: none;
  }
  .social_links{
    display:flex;
    column-gap: 28px;
  }
  .social_links svg *{
    fill:#fff;
  }


</style>

<script>

export default {
    name: 'Hero',
    data() {
      return {
        show_hero_content: false,
      }
    },
    computed: {
        showallLocales () {
        return this.$i18n.locales
      },
    },
    mounted() {
      this.show_hero_content = true;  
    }
}

</script>



