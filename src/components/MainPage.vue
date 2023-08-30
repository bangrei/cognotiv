<template>
    <main class="relative w-full h-full flex flex-row justify-start flex-1">
        <div class="relative flex w-1/3 h-full flex-col bg-[url('../src/assets/wall.jpeg')] bg-cover">
			<div class="w-full flex items-center bg-amber-400 py-20 px-10 cursor-pointer font-extrabold" @click="backHome()">
				<div class="material-icons md-12 text-white">west</div>
				<span class="px-2 text-white">Back</span>
			</div>
        </div>
        <div class="flex w-2/3">
			<about-us v-if="activeIndex == 0" />
			<our-product v-if="activeIndex == 1" />
			<contact-us v-if="activeIndex == 2" />
		</div>
		<div class="absolute flex flex-col top-1/2 left-40 text-left gap-10 text-6xl font-extrabold ">
			<div class="flex flex-row gap-8 items-center cursor-pointer" v-for="(item, i) in items" :key="i" @click="activeIndex = item.id">
				<span class="w-40 h-4" :class="{'bg-amber-400 drop-shadow-lg': activeIndex == item.id}"></span>
				<span :class="{'text-amber-400 drop-shadow-lg': activeIndex == item.id, 'text-slate-900': activeIndex !== item.id}">{{ item.label }}</span>
			</div>
		</div>
    </main>
</template>

<script>
    import router from "../router";
	import AboutUs from './widgets/AboutUs.vue';
	import OurProduct from './widgets/OurProduct.vue';
	import ContactUs from './widgets/ContactUs.vue';
    export default {
        name: "MainPage",
		components: {
			AboutUs,
			OurProduct,
			ContactUs
		},
        data() {
            return {
				activeIndex: 0,
				items: []
			}
        },
        watch: {},
        computed: {},
        methods: {
            backHome(){
                router.push({ name: "HomePage" });
            }
        },
		created(){
			this.items = [
				{id:0, label: "About Us"},
				{id:1, label: "Our Product"},
				{id:2, label: "Contact Us"},
			]
		}
    };
</script>