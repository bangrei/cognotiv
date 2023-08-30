<template>
    <main class="w-full h-full py-6 px-4 sm:p-6 md:py-10 md:px-8">
        <div class="transition flex flex-col group py-10 px-5">
            <span class="transition-all duration-500 absolute end-6 top-10 w-0 h-4 bg-amber-400 group-hover:w-40"></span>
            <span class="transition-all duration-500 absolute end-48 top-10 w-0 h-4 bg-amber-400 group-hover:w-20"></span>
            <span class="transition duration-500 absolute font-extrabold top-10 left-40 z-10 text-9xl text-amber-400 
                group-hover:translate-x-5 
                group-hover:translate-y-5
                group-hover:left-50"
            >We Create</span>
            <div class="flex flex-col w-4/6 h-full mx-auto">
                <img src="../assets/bubble-light.jpeg" alt="" class="transition duration-500 
                    group-hover:object-contain 
                    w-full h-full object-cover" loading="lazy">
            </div>
            <button class="transition-all duration-500 flex flex-row items-center gap-x-2 
                group-hover:left-0
                group-hover:translate-x-1/2
                hover:bg-amber-400 
                hover:text-white
                hover:rounded-md
                hover:bg-gradient-to-r
                hover:from-amber-400
                hover:to-amber-500
                absolute translate-x-0 bg-transparent p-4 font-extrabold left-full z-10 top-2/3 text-6xl text-amber-400"
                @click="hello()"
            >
                <span class="text-6xl">AWESOME THINGS</span> 
                <div class="material-icons md-60">east</div>
            </button>
            <span class="transition-all duration-500 absolute start-6 bottom-10 w-0 h-4 bg-amber-400 group-hover:w-40"></span>
            <span class="transition-all duration-500 absolute start-48 bottom-10 w-0 h-4 bg-amber-400 group-hover:w-20"></span>
        </div>
    </main>
</template>

<script>
    import router from "../router";
    export default {
        name: "HomePage",
        data() {
            return {}
        },
        watch: {},
        computed: {},
        methods: {
            hello(){
                router.push({ name: "MainPage" });
            }
        }
    };
</script>