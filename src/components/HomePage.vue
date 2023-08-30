<template>
    <main class="w-full h-screen p-16">
        <div class="transition flex flex-col group w-full h-screen p-16">
            <span class="transition-all duration-500 absolute end-6 top-10 w-0 h-4 bg-amber-400 group-hover:w-40"></span>
            <span class="transition-all duration-500 absolute end-48 top-10 w-0 h-4 bg-amber-400 group-hover:w-20"></span>
            <span class="transition duration-500 absolute font-extrabold top-5 left-40 z-10 text-9xl text-amber-400 
                group-hover:translate-x-5 
                group-hover:translate-y-5
                group-hover:left-50"
            >We Create</span>
            <div class="flex flex-col w-5/6 h-5/6 mx-auto">
                <img src="../assets/bubble-light.jpeg" alt="" class="transition duration-500 grayscale
                    group-hover:grayscale-0
                    w-full h-full object-cover" loading="lazy">
            </div>
            <button class="relative group transition-all duration-500 flex flex-row items-center gap-x-2 
                hover:bg-amber-400 
                hover:text-white
                hover:rounded-md
                hover:bg-gradient-to-r
                hover:from-amber-400
                hover:to-amber-500
                group-hover:w-4/6
                h-24 w-full whitespace-nowrap bg-transparent p-4 font-extrabold z-10 bottom-16 text-6xl text-amber-400"
                @click="hello()"
            >
                <div class="text-6xl right-full absolute transition-all opacity-0
                    group-hover:right-auto
                    group-hover:left-10
                    group-hover:opacity-100
                    group-hover:translate-x-10">AWESOME THINGS</div> 
                <div class="material-icons md-60 opacity-0 left-full right-0 absolute transition-all
                    group-hover:left-auto
                    group-hover:right-20
                    group-hover:opacity-100
                    group-hover:translate-x-0">east</div>
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