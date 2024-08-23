<template>
  <div class="h-full bg-gray-200 p-1 pr-4 overflow-x-auto">
    <div class="md:ml-[267px] bg-gray-50 rounded-md max-h-full">
      <main class="mt-2">
        <div class="block bg-white-50 p-4 rounded-sm">
          <div class="grid grid-cols-2 items-center justify-end">
            <div class="flex">
              <h1 class="text-xl font-semibold text-gray-800">Users</h1>
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
                              <th scope="col" class="px-6 py-3 text-gray-200">
                                  Category
                              </th>
                              <th scope="col" class="px-6 py-3 text-gray-200">
                                  Price
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr v-for="(item, i) in 10" :key="i" class="border-b border-neutral-200 dark:border-white/10">
                              <th scope="row" class="px-6 text-md">
                                  Apple MacBook Pro 17"
                              </th>
                              <td class="px-6 py-4">
                                  Silver
                              </td>
                              <td class="px-6 py-4">
                                  Laptop
                              </td>
                              <td class="px-6 py-4">
                                  $2999
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SavingAddModal :isOpen="isModalOpen" @close="closeModal" />
    </div>
  </div>
</template>

<script>
  import SavingAddModal from '@/components/Saving/AddModal.vue';

  export default {
    components: {
      SavingAddModal
    },
    data() {
      return {
        isModalOpen: false
      };
    },
    methods: {
      openModal() {
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
      }
    }
  };
</script>

