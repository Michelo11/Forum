<template>
  <div class="flex flex-col w-3/4 md:w-2/5 mx-auto mt-5 space-y-10">
    <h1 class="mx-auto text-[#9b9ca2] font-bold text-3xl md:text-4xl">
      Create a new post
    </h1>

    <form
      @submit.prevent="comment"
      class="transition ease-in-out w-full h-fit relative mx-auto mt-5"
    >
      <div class="flex space-x-2 md:space-x-10">
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Thread Title"
          :v-model="title"
          class="pl-1 md:pl-5 w-full h-10 bg-[#F9F9F9] rounded-xl"
          required
        />

        <select
          :v-model="label"
          class="pl-1 md:pl-5 w-full h-10 bg-[#F9F9F9] rounded-xl"
          value="announcement"
          required
        >
          <option value="announcement" disabled>Announcement</option>
          <option value="building">Building</option>
          <option value="development">Development</option>
          <option value="design">Design</option>
        </select>
      </div>

      <textarea
        id="content"
        name="content"
        type="text"
        placeholder="Thread text"
        :v-model="text"
        class="mt-5 pl-5 pt-2 w-full bg-[#F9F9F9] rounded-xl"
        ref="textarea"
        @input="autoGrow"
        required
      />

      <button
        class="mt-10 bg-[#FE6601] hover:bg-[#febb01] transition ease-in-out cursor-pointer rounded-lg w-full h-8 flex items-center justify-center content-center text-white space-x-5"
        id="submit"
        type="submit"
      >
        <font-awesome-icon icon="fa-solid fa-paper-plane" class="text-white" />
        <span>Post Now</span>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "NewView",
  data() {
    return {
      title: "",
      text: this.$route.query.content || "",
      label: "",
    };
  },
  methods: {
    submit() {},
    autoGrow() {
      this.$refs.textarea.style.height = "auto";
      this.$refs.textarea.style.height =
        this.$refs.textarea.scrollHeight + "px";
    },
  },
  mounted() {
    if (this.text.length > 0) {
      this.autoGrow();
      this.$refs.textarea.textContent = this.text;
    }
  },
};
</script>
