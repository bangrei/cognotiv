<template>
    <div class="animate-fade-in transition-all relative flex grow bg-[url('../src/assets/mirror.jpeg')] bg-cover">
        <div class="animate-late-in box absolute right-10 top-20 my-20 mx-20 w-1/2">
            <div class="flex flex-col gap-10 bg-opacity-50 rounded-md bg-white p-8">
                <div class="text-6xl text-slate-900 text-left font-extrabold">Our People <br/> Come First</div>
                <div class="text-2xl text-slate-900 text-left font-medium">We are independently owned, strategic creative agency forever curious and ready to transform the way business is done.</div>
            </div>
            <button class="text-white rounded-md bg-amber-400 float-right cursor-pointer py-4 px-8 my-10 font-extrabold text-2xl">
                Learn more
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AboutUs",
        data() {
            return {
				activeIndex: 0,
				items: []
			}
        },
        watch: {},
        computed: {},
        methods: {},
		created(){}
    };
</script>