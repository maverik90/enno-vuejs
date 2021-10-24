<template>
    <b-nav align="right" class="enno_nav">
        <NuxtLink :to="getcurrentLocale +'/'">{{ $t('menu.welcome') }}</NuxtLink>
        <NuxtLink :to="getcurrentLocale + '/workshop'">{{ $t('menu.workshops') }}</NuxtLink>
        <NuxtLink :to="getcurrentLocale + '/workshop'">{{ $t('menu.workshops') }}</NuxtLink>
        <NuxtLink to="/insights">{{ $t('menu.insights') }}</NuxtLink>
        <NuxtLink to="/contact">{{ $t('menu.contact') }}</NuxtLink>
    </b-nav>
</template>

<script>
export default {
    name:'EnnoMenu',
    computed: {
        availableLocales () {
            return this.$i18n.locales.filter(i => i.code == this.$i18n.locale)
        },
        getcurrentLocale () {
            var currentLocale = this.$i18n.locales.filter(i => i.code == this.$i18n.locale);
            console.log(currentLocale[0].code);
            if(currentLocale[0].code == 'en'){
                return '';
            }else{ 
                return currentLocale[0].code;
            }
        }
    }

}

</script>

<style scoped>
    .enno_nav a{
        color:#fff;
        font-size: 0.875em;
        font-weight: 600;
        margin:0 10px;
        padding:5px 15px;
    }
</style>
