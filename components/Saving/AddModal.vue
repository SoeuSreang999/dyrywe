<template>
  <TransitionRoot :show="isOpen">
    <Dialog as="div" class="relative z-40" @close="handleClose">
      <TransitionChild
        enter="duration-200"
        leave="duration-200"
        enter-from="opacity-0"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-10" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="block min-h-[50%] p-4">
          <TransitionChild
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="flex items-center justify-center">
              <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full max-w-96 md:max-w-lg lg:max-w-3xl sm:p-6">
                <h3 class="text-start text-lg leading-6 font-medium text-gray-900" id="modal-title">Add Saving</h3>
                <div class="mt-2">
                  <form @submit.prevent="handleSubmit">
                    <div class="space-y-12">
                      <div class="border-b border-gray-900/10 pb-12">
                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                          <div class="sm:col-span-3">
                            <label for="first-name" class="block text-sm text-start font-medium leading-6 text-gray-900">Name</label>
                            <div class="mt-2">
                              <input type="text" id="name" v-model="product.name" class="block w-full rounded-md border-0 py-2 p-2 text-gray-900 ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6 outline-none"/>
                            </div>
                          </div>
                          <div class="sm:col-span-3">
                            <label for="last-name" class="block text-start text-sm font-medium leading-6 text-gray-900">Last name</label>
                            <div class="mt-2">
                              <input type="text" id="price" v-model="product.price" class="block w-full rounded-md border-0 py-2 p-2 text-gray-900 ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6 outline-none"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mt-6 flex items-center justify-end gap-x-3">
                      <button type="submit" class="rounded-sm bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                      <button @click.prevent="handleClose" type="button" class="rounded-sm bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Close</button>
                    </div>
                  </form>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue';
import { Dialog, DialogPanel, TransitionRoot, TransitionChild } from '@headlessui/vue';
import { useNuxtApp } from '#app';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['close', 'refresh']);
const product = ref({
  name: '',
  price: 0
});

const handleClose = () => {
  emit('close');
};

const handleSubmit = async () => {
  try {
    await $fetch('/api/products', {
      method: 'POST',
      body: product.value
    });
    product.value = { name: '', price: 0 }; // Reset form
    handleClose();
    emit('refresh');
  } catch (error) {
    console.error('Error creating product:', error);
  }
};
</script>