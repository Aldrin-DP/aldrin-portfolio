<template>
  <div id="app">
    <Navbar />
    <Home />
    <Projects />
    <TechStacks />
    <Contact />
    <Footer />
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue';
import TechStacks from './components/TechStacks.vue';
import Projects from './components/Projects.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Home,
    TechStacks,
    Projects,
    Footer,
  }
}

</script>