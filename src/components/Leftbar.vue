<template>
  <div class="w-fit flex-col mt-8 ml-8 space-y-10 hidden md:flex">
    <div class="space-y-8">
      <div class="cursor-pointer flex items-center space-x-4 text-lg">
        <div
          class="bg-[#f9f9f9] rounded-lg w-10 h-10 flex items-center justify-center content-center"
        >
          <font-awesome-icon
            icon="fa-solid fa-folder-open"
            class="text-[#9b9ca2]"
          />
        </div>

        <span>Categories</span>
      </div>

      <div class="cursor-pointer flex items-center space-x-4 text-lg">
        <div
          class="bg-[#f9f9f9] rounded-lg w-10 h-10 flex items-center justify-center content-center"
        >
          <font-awesome-icon
            icon="fa-solid fa-bookmark"
            class="text-[#9b9ca2]"
          />
        </div>

        <span>Saved Threads</span>
      </div>

      <div class="cursor-pointer flex items-center space-x-4 text-lg">
        <div
          class="bg-[#f9f9f9] rounded-lg w-10 h-10 flex items-center justify-center content-center"
        >
          <font-awesome-icon icon="fa-solid fa-book" class="text-[#9b9ca2]" />
        </div>

        <span>Your Threads</span>
      </div>
    </div>

    <div class="space-y-8 w-60">
      <div class="flex text-xl items-center">
        <span>Categories</span>
        <font-awesome-icon icon="fa-solid fa-chevron-down" class="ml-auto" />
      </div>

      <div
        class="cursor-pointer flex items-center space-x-4 text-lg bg-white rounded-lg w-full p-2 pr-10"
      >
        <div
          class="bg-[#f9f9f9] rounded-lg w-10 h-10 flex items-center justify-center content-center"
        >
          <font-awesome-icon icon="fa-solid fa-city" class="text-[#9b9ca2]" />
        </div>

        <span>Building</span>
      </div>

      <div
        class="cursor-pointer flex items-center space-x-4 text-lg rounded-lg w-full p-2 pr-10 hover:bg-white hover:bg-opacity-50 transition ease-in-out"
      >
        <div
          class="bg-[#f9f9f9] rounded-lg w-10 h-10 flex items-center justify-center content-center"
        >
          <font-awesome-icon icon="fa-solid fa-code" class="text-[#9b9ca2]" />
        </div>

        <span>Development</span>
      </div>

      <div
        class="cursor-pointer flex items-center space-x-4 text-lg rounded-lg w-full p-2 pr-10 hover:bg-white hover:bg-opacity-50 transition ease-in-out"
      >
        <div
          class="bg-[#f9f9f9] rounded-lg w-10 h-10 flex items-center justify-center content-center"
        >
          <font-awesome-icon
            icon="fa-solid fa-swatchbook"
            class="text-[#9b9ca2]"
          />
        </div>

        <span>Design</span>
      </div>
    </div>
  </div>
</template>
