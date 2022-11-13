<template>
  <div class="bg-white p-5 rounded-lg relative flex">
    <div>
      <img src="@/assets/propic.png" alt="propic" />
      <p class="font-bold m-auto w-fit">{{ author }}</p>
    </div>

    <p class="ml-5 text-sm text-gray-500">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    author: String,
    text: String,
  },
};
</script>
