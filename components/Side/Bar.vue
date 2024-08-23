<template>
    <aside id="logo-sidebar" class="fixed bg-gray-800 top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
        <div class="h-full bg-gray-800 text-gray-200 px-3 pb-4 overflow-y-auto dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <template v-for="n in menu" :key="`menuItem${n.name}`">
                    <NuxtLink
                            :to="n.link"
                            class="flex items-center p-2 rounded-lg group"
                            :class="{ 'bg-gray-700 text-white': $route.path === n.link, 'text-gray-300 hover:bg-gray-700 dark:hover:bg-gray-700': $route.path !== n.link }"
                        >
                        <svg class="flex-shrink-0 w-5 h-5 text-gray-300 transition duration-75 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                            <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                        </svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">{{ n.name }}</span>
                    </NuxtLink>
                </template>
            </ul>
        </div>
    </aside>
</template>

<script setup>
    import { ref } from "vue";
    import { useRoute } from "vue-router";
	const menu = ref([
		{ name: "Home", link: "/" },
		{ name: "Users", link: "/users" },
		{ name: "Saving Money", link: "/savings" },
	]);
    const $route = useRoute();
</script>