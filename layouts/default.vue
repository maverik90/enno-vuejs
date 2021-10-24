<template>
  <main class="body">
    <EnnoHomepageHeader></EnnoHomepageHeader>
      <nuxt/>
    <EnnoFooter></EnnoFooter>
  </main>
</template>


<script>
import EnnoHomepageHeader from '@/components/includes/Header';
import EnnoFooter from '@/components/includes/Footer';

export default {
  namer:'HomepageLayout',

  components: {
      EnnoHomepageHeader,
      EnnoFooter
  }
}
</script>

<style>
    .body {
        min-height:100vh;
        padding-top: 90px;
    }
</style>
