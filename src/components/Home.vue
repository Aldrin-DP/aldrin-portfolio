<template>
    <section id="home">
        <div class="px-5 flex items-center gap-1 sm:w-10/12 md:w-8/12 m-auto">
            <div class="w-2 h-2 bg-green-500 rounded-full"></div>
            <span class="text-light-primary text-sm">Online</span>
        </div>
        <div class="flex items-center gap-2 p-5 w-full sm:w-10/12 md:w-8/12 m-auto">
            <div class="w-full">
                <h1 class="text-3xl font-bold text-light-primary sm:text-[47px]">
                    Hello, I'm
                    Aldrin Pelayo
                </h1>
                <p class="text-light-secondary mt-2 sm:mt-4">
                    I am passionate about web development, specializing in Laravel and modern web technologies.
                </p>
                <button
                    @click="openResume" 
                    class="px-6 py-1 text-light-primary bg-transparent border border-white/20 rounded-full mt-3 sm:mt-4 hover:border-gray-300 transition-colors duration-300">
                    <span class="mr-2">Resume</span> <font-awesome-icon :icon="['fas', 'arrow-right-long']" />
                </button>
            </div>
            <!-- <div class="w-6/12">
                <div class="flex justify-end">
                    <img src="/images/profile.jpg" alt="" class="rounded-xl h-[300px] sm:h-[400px]">
                </div>
            </div> -->
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            path: '/Aldrin_resume.pdf'
        }
    },
    methods: {
        openResume() {
            window.open(this.path, '_blank');
        }
    }
}
</script>