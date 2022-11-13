<template>
  <div
    class="bg-white p-5 rounded-lg relative"
    :class="single ? '' : 'cursor-pointer w-3/4 md:w-auto m-auto'"
    @click="single ? null : $router.push(`/${id}`)"
  >
    <div class="md:flex">
      <div class="flex">
        <img src="@/assets/propic.png" alt="propic" />

        <div class="ml-5">
          <h1 class="text-xl font-bold">{{ title }}</h1>
          <p class="text-sm text-gray-500">
            by <span class="font-bold text-[#636363]">{{ author }}</span>
          </p>
        </div>
      </div>

      <div
        class="mt-5 w-full md:mt-0 md:ml-auto bg-[#FE6601] md:w-36 rounded-lg text-white p-1 h-8 flex content-center text-center justify-center items-center"
      >
        <span>{{ label }}</span>
      </div>
    </div>

    <p class="mt-5 text-sm text-gray-500 pb-[50px]">{{ text }}</p>

    <div class="absolute bottom-5 flex space-x-4">
      <div
        class="bg-[#f9f9f9] hover:bg-[#d4d4d4] cursor-pointer transition ease-in-out rounded-lg w-10 h-10 flex items-center justify-center content-center text-[#9b9ca2]"
      >
        <font-awesome-icon icon="fa-solid fa-bookmark" class="text-[#9b9ca2]" />
      </div>

      <div
        class="bg-[#f9f9f9] hover:bg-[#d4d4d4] cursor-pointer transition ease-in-out rounded-lg min-w-10 h-10 px-4 flex space-x-4 items-center justify-center content-center text-[#9b9ca2]"
      >
        <font-awesome-icon
          icon="fa-solid fa-thumbs-up"
          class="text-[#9b9ca2]"
        />
        <span>{{ likes }}</span>
      </div>

      <div
        v-if="!single"
        class="bg-[#f9f9f9] hover:bg-[#d4d4d4] cursor-pointer transition ease-in-out rounded-lg min-w-10 h-10 px-4 flex space-x-4 items-center justify-center content-center text-[#9b9ca2]"
      >
        <font-awesome-icon icon="fa-solid fa-comment" class="text-[#9b9ca2]" />
        <span>{{ comments.length }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    id: Number,
    title: String,
    author: String,
    text: String,
    label: String,
    likes: Number,
    comments: Array,
    single: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
