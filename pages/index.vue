<template>
  <div>
    <Hero />
    <Clients />
  </div>
</template>

<script>

import HomepageLayout from '@/layouts/default';
import Clients from '@/components/homepage/clients';
import Hero from '@/components/homepage/hero';

export default {
    name: 'index',
    layout: 'defaut', // name of your new layout
    components: {
        Hero,
        HomepageLayout,
        Clients
    }
};
</script>

