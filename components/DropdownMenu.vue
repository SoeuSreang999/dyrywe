<template>
    <div class="block top-16 w-full">
      <Menu as="div" class="relative inline-block text-left">
        <div>
          <MenuButton
            class="inline-flex w-full justify-center rounded-sm bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
          >
            <font-awesome-icon icon="list" class="inline-flex items-center" />
          </MenuButton>
        </div>
  
        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
          >
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <button
                  @click="handleEdit"
                  :class="[
                    active ? 'bg-gray-400 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                <font-awesome-icon icon="pen-alt" class="inline-flex items-center mr-2" />
                  Edit
                </button>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button
                  @click="handleDuplicate"
                  :class="[
                    active ? 'bg-gray-400 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                <font-awesome-icon icon="copy" class="inline-flex items-center mr-2" />
                  Duplicate
                </button>
              </MenuItem>
            </div>
  
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <button
                  @click="handleDelete"
                  :class="[
                    active ? 'bg-red-600 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                <font-awesome-icon icon="trash" class="inline-flex items-center mr-2" />
                  Delete
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </template>
  
  <script setup>
  import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
  
  const emit = defineEmits(['edit', 'duplicate', 'archive', 'move', 'delete'])
  
  const handleEdit = () => {
    emit('edit')
  }
  
  const handleDuplicate = () => {
    emit('duplicate')
  }
  
  const handleDelete = () => {
    emit('delete')
  }
  </script>
  
  <style scoped>
  /* You can add custom styles here if needed */
  </style>
  