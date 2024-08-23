<template>
  <div class="h-full bg-gray-200 p-1 pr-4 overflow-x-auto">
    <div class="md:ml-[267px] bg-gray-50 rounded-md max-h-full">
      <main class="mt-2">
        <div class="block bg-white-50 p-4 rounded-sm">
          <div class="grid grid-cols-2 items-center justify-end">
            <div class="flex">
              <h1 class="text-xl font-semibold text-gray-800">Saving Money</h1>
            </div>
            <div class="flex justify-end">
              <button 
                type="button" 
                @click="openModal" 
                class="rounded-sm bg-blue-600 text-gray-300 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 mb-2">
                <font-awesome-icon icon="plus-circle" />
                Add New
              </button>
            </div>
          </div>
          <div class="block mt-10">
            <!-- <h1 class="text-lg font-medium text-gray-800">Manage Products</h1> -->
            <div class="grid grid-cols-1 gap-0 mt-1">
              <div class="relative overflow-x-auto">
                  <table class="w-full text-md text-left rtl:text-right text-gray-950 dark:text-gray-950">
                      <thead class="text-md text-black uppercase bg-gray-800 rounded-5">
                          <tr>
                              <th scope="col" class="px-6 py-3 text-gray-200">
                                  Product name
                              </th>
                              <th scope="col" class="px-6 py-3 text-gray-200">
                                  Color
                              </th>
                              <th scope="col" class="px-6 py-3 text-gray-200 text-center">
                                  Action
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr v-for="product in products" :key="product._id" class="border-b border-neutral-200 dark:border-white/10">
                              <th scope="row" class="px-6 text-md">
                                  {{ product.name }}
                              </th>
                              <td class="px-6 py-4">
                                {{ product.price }}
                              </td>
                              <td class="px-6 py-4 text-center">
                                <DropdownMenu
                                  @edit="handleEdit(product)"
                                  @duplicate="handleDuplicate(product)"
                                  @archive="handleArchive(product)"
                                  @move="handleMove(product)"
                                  @delete="handleDelete(product)"
                                />
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SavingAddModal :isOpen="isModalOpen" @close="closeModal" @refresh="fetchProducts" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SavingAddModal from '@/components/Saving/AddModal.vue';
import DropdownMenu from '@/components/DropdownMenu.vue';

const isModalOpen = ref(false);
const products = ref([]);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const fetchProducts = async () => {
  try {
    const response = await $fetch('/api/products');
    products.value = response;
    console.log(response);
    
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

onMounted(() => {
  fetchProducts();
});
</script>

