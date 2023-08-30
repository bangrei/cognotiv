<template>
    <div class="animate-fade-in transition-all relative flex grow bg-[url('../src/assets/mirror.jpeg')] bg-cover">
        <div class="animate-late-in box absolute right-10 top-20 my-20 mx-20 w-1/2 bg-opacity-50 rounded-md bg-white py-8 px-16">
            <div class="flex flex-col gap-8">
                <div class="text-4xl text-slate-700 text-left font-extrabold">Type your beautiful name</div>
                <input type="text" class="p-4 rounded-md outline-none text-xl font-bold"/>
            </div>
            <div class="flex flex-col gap-8 rounded-md">
                <div class="text-4xl text-slate-700 text-left font-extrabold">Protect your email address</div>
                <input type="text" class="p-4 rounded-md outline-none text-xl font-bold"/>
            </div>
            <button class="text-white rounded-md bg-amber-400 float-center cursor-pointer py-4 px-8 my-8 font-extrabold text-2xl">
                Submit
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactUs",
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