<template>
  <Navbar :user="user" :authIsReady="authIsReady"/>
  <router-view :user="user" :authIsReady="authIsReady"/>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: { Navbar },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);
    const authIsReady = computed(() => store.state.authIsReady);

    return { user, authIsReady };
  },
}
</script>

<style>

</style>
