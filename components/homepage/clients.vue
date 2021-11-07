<template>
    <section>
        <b-container class="enno_clients section">
            <b-row>
                <b-col cols="6">
                    <h6>02 / {{ $t('home.clients.subheading') }}</h6>
                    <div
                    v-observe-visibility="{
                        callback: (isVisible, entry) => {visibilityChanged(isVisible, entry, 'headingtyping1')},
                        once: true,
                    }"
                     >
                        <h2 class="main_hero_heading " id="headingtyping1"></h2>
                    </div>

                </b-col>
                <b-col cols="6" >
                    <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
                    <div
                    v-observe-visibility="{
                        callback: (isVisible, entry) => {visibilityChanged(isVisible, entry, 'headingtyping2')},
                        once: true,
                    }"
                     >
                        <h2 class="main_hero_heading " id="headingtyping2"></h2>
                    </div>
                    

                </b-col>
            </b-row>
         </b-container>
    </section>
</template>

<style scoped>
    .visible { visibility: visible; opacity:1; }
    .invisible { visibility: hidden; opacity:0; }
</style>

<script>
import Typed from 'typed.js';

export default {
    name: 'Clients',
    data() {
      return {
        show_hero_content: true,
        showAnimation: true,
        VueTypedJs: '',
        clientheading: this.$t('home.clients.heading')
      }
    },
    methods:{
        visibilityChanged(isVisible, entry, heading) {
            this.showAnimation = isVisible;
            if(this.showAnimation == true){
                console.log('showAnimation true: ' + heading);
                var options = {
                    strings: [this.clientheading],
                    typeSpeed: 30,
                    showCursor: false,
                    loop: false,
                };
                new Typed('#'+heading , options);
            }
          
            //console.log('isViewableNow');

        },

        
    },
    mounted() {
        this.show_hero_content = false;  


    },


}

</script>

