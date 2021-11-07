<template>
    <b-nav align="right" class="enno_nav">
        <NuxtLink :to="{ name: 'index___' + getcurrentLocale }">{{ $t('menu.welcome') }}</NuxtLink>
        <NuxtLink :to="{ name: 'workshops___' + getcurrentLocale }">{{ $t('menu.workshops') }}</NuxtLink>
        <NuxtLink :to="{ name: 'insights___' + getcurrentLocale }">{{ $t('menu.insights') }}</NuxtLink>
        <NuxtLink :to="{ name: 'contact___' + getcurrentLocale }">{{ $t('menu.contact') }}</NuxtLink>
    </b-nav>
</template>

<script>
import EnnoHomepageHeader from '@/components/includes/Header';

export default {
    name:'EnnoMenu',

    components:{
        EnnoHomepageHeader
    },
    computed: {
        availableLocales () {
            return this.$i18n.locales.filter(i => i.code == this.$i18n.locale)
        },
        getcurrentLocale () {
            var currentLocale = this.$i18n.locales.filter(i => i.code == this.$i18n.locale);
            return currentLocale[0].code;
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
