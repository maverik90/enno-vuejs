<template>
  <main>
    <EnnoSubpageHeader></EnnoSubpageHeader>
      <nuxt/>
    <EnnoFooter></EnnoFooter>
  </main>
</template>


<script>
import EnnoSubpageHeader from '@/components/includes/Header-subpage';
import EnnoFooter from '@/components/includes/Footer';

export default {
  namer:'SubpageLayout',
  
  components: {
      EnnoSubpageHeader,
      EnnoFooter
  }
}
</script>

<style>
    main {
        min-height:100vh;
        padding-top: 90px;
    }
</style>
