<template>
  <div class="w-full">
    <form
      @submit.prevent="submit"
      class="transition ease-in-out w-3/4 md:w-2/5 min-h-10 h-fit relative mx-auto mt-5 flex bg-[#F9F9F9] rounded-xl"
    >
      <textarea
        id="content"
        name="content"
        type="text"
        placeholder=" "
        @change="content = $event.target.value"
        class="pl-5 pt-2 w-full h-9 bg-transparent"
        required
      />
      <label
        for="content"
        class="absolute left-1 top-2 text-[#9B9CA2] pointer-events-none flex w-full items-center"
      >
        <span class="ml-5">Create a new thread</span>
      </label>

      <button
        type="submit"
        class="relative ml-auto bg-[#FE6601] hover:bg-[#febb01] transition ease-in-out cursor-pointer rounded-lg w-10 h-10 flex items-center justify-center content-center pointer-events-auto"
        id="submit"
      >
        <font-awesome-icon icon="fa-solid fa-paper-plane" class="text-white" />
      </button>
    </form>

    <div class="flex flex-col md:w-2/5 mx-auto mt-5 space-y-10">
      <Post
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :author="post.author"
        :text="post.text"
        :label="post.label"
        :likes="post.likes"
        :comments="post.comments"
      />
    </div>
  </div>
</template>

<script>
import Post from "../components/Post.vue";

export default {
  name: "HomeView",
  data() {
    return {
      content: "",
      posts: [
        {
          id: 1,
          title: "Welcome on JuniorTeam",
          author: "Frank",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.",
          label: "Announcements",
          likes: 100,
          comments: [
            {
              author: "Frank",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.",
            },
          ],
        },
        {
          id: 2,
          title: "Welcome on JuniorTeam",
          author: "Frank",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.",
          label: "Announcements",
          likes: 100,
          comments: [
            {
              author: "Frank",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.",
            },
          ],
        },
      ],
    };
  },
  methods: {
    submit() {
      console.log(this.content);
      this.$router.push("/new?content=" + this.content);
    },
  },
  components: { Post },
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
