<template>
  <div class="flex justify-between items-center p-5">
    <div class="">
      <a
        href=""
        class="text-light-primary font-bold font-figtree tracking-wide"
      >
       Aldrin Pelayo
      </a>
    </div>
    <div class="flex gap-2">
      <a
        href="https://github.com/Aldrin-DP"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
        class="text-light-primary hover:text-light-secondary transition-colors duration-200"
      >
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
      <a
        href="https://linkedin.com/in/aldrinpelayo"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
        class="text-light-primary hover:text-light-secondary transition-colors duration-200"
      >
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
      <a
        href="mailto:aldrinpelayo.adp@gmail.com"
        target="_blank"
        aria-label="Email Contact"
        class="text-light-primary hover:text-light-secondary transition-colors duration-200"
      >
        <font-awesome-icon :icon="['fas', 'envelope']" />
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>
