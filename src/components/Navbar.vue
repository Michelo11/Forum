<template>
  <nav class="w-full flex bg-white h-16 items-center justify-between">
    <div
      class="ml-5 space-x-5 text-center items-center cursor-pointer hidden md:flex"
      @click="$router.push('/')"
    >
      <img src="@/assets/logo.png" alt="logo" class="rounded-xl" width="40" />
      <span class="text-[#FE6601] text-[20px]">JuniorTeam</span>
    </div>

    <form @submit.prevent="search" class="w-[300px] relative mx-5 md:mx-0">
      <input
        id="query"
        name="query"
        type="text"
        placeholder=" "
        :v-model="query"
        class="bg-[#F9F9F9] p-2 rounded-xl w-full"
      />
      <label
        for="query"
        class="absolute left-2 top-2 text-[#9B9CA2] pointer-events-none"
      >
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="mr-5" />
        <span>Type to search</span>
      </label>
    </form>

    <div class="mr-5 flex space-x-2 md:space-x-5">
      <div
        class="relative bg-[#f9f9f9] hover:bg-[#d4d4d4] transition ease-in-out cursor-pointer rounded-lg w-10 h-10 flex items-center justify-center content-center"
      >
        <span
          class="top-0 right-0 animate-ping absolute inline-flex h-2 w-2 rounded-full bg-sky-400 opacity-80"
        ></span>
        <font-awesome-icon
          icon="fa-solid fa-paper-plane"
          class="relative text-[#9b9ca2]"
        />
      </div>

      <div
        class="bg-[#f9f9f9] hover:bg-[#d4d4d4] transition ease-in-out cursor-pointer rounded-lg w-10 h-10 flex items-center justify-center content-center"
      >
        <font-awesome-icon icon="fa-solid fa-user" class="text-[#9b9ca2]" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    search() {
      this.$router.push({ name: "Search", params: { query: this.query } });
    },
  },
  mounted() {
    $("textarea").each(function () {
      const textarea = this;
      const base = $(textarea).height();
      const newHeight = "10rem";
      $(textarea)
        .focusin(function (e) {
          if ($(textarea).height() < 90) {
            $(textarea).stop(true, true).animate({ height: newHeight });
          }
        })
        .focusout(function (e) {
          $(textarea).stop(true, true).animate({ height: base });
        });
    });
  },
};
</script>
