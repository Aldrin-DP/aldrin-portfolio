<template>
  <div id="app">
    <Navbar />
    <Home />
    <Projects />
    <TechStacks />
    <Contact />
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue';
import TechStacks from './components/TechStacks.vue';
import Projects from './components/Projects.vue';

export default {
  components: {
    Navbar,
    Home,
    TechStacks,
    Projects
  }
}

</script>