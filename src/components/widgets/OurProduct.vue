<template>
    <div class="animate-fade-in transition-all relative flex grow bg-[url('../src/assets/star-sky.jpeg')] bg-cover">
        <div class="animate-late-in relative top-20 left-60 py-20 px-20 w-3/4">
                <carousel :transition="500" :items-to-show="1">
                    <slide v-for="(item, i) in items" :key="i">
                        <div class="flex flex-col gap-10 bg-opacity-50 rounded-md bg-white p-16">
                            <div class="text-6xl text-slate-900 text-left font-extrabold">{{ item.label }}</div>
                            <div class="animate-text-anim text-6xl text-amber-400 drop-shadow-lg text-left font-extrabold">{{ item.text }}</div>
                        </div>
                    </slide>
                    <template #addons>
                        <navigation />
                        <pagination />
                    </template>
                </carousel>
        </div>
    </div>
</template>

<script>
    import 'vue3-carousel/dist/carousel.css';
    import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
    export default {
        name: "OurProduct",
        components: {
            Carousel,
            Slide,
            Navigation,
            Pagination
        },
        data() {
            return {
				activeIndex: 0,
				items: []
			}
        },
        watch: {},
        computed: {},
        methods: {},
		created(){
            this.items = [
                {
                    id: 0,
                    label: "We Solve Your",
                    text: "PROBLEM",
                },
                {
                    id: 1,
                    label: "We Know Your",
                    text: "PROBLEM",
                },
            ]
        }
    };
</script>