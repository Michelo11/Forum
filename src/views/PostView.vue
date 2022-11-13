<template>
  <div class="flex flex-col w-3/4 md:w-2/5 mx-auto mt-5 space-y-10">
    <Post
      :id="id"
      :title="title"
      :author="author"
      :text="text"
      :label="label"
      :likes="likes"
      :single="true"
    />
    <Comment
      v-for="comment in comments"
      :key="comment.id"
      :author="comment.author"
      :text="comment.text"
    />

    <form
      @submit.prevent="comment"
      class="transition ease-in-out w-full min-h-10 h-fit relative mx-auto mt-5 flex bg-[#F9F9F9] rounded-xl"
    >
      <textarea
        id="content"
        name="content"
        type="text"
        placeholder=" "
        :v-model="commentText"
        class="pl-5 pt-2 w-full h-9 bg-transparent"
      />
      <label
        for="content"
        class="absolute left-1 top-2 text-[#9B9CA2] pointer-events-none flex w-full items-center"
      >
        <span class="ml-5">Post a comment</span>
      </label>

      <button
        class="relative ml-auto bg-[#FE6601] hover:bg-[#febb01] transition ease-in-out cursor-pointer rounded-lg w-10 h-10 flex items-center justify-center content-center pointer-events-auto"
        id="submit"
        type="submit"
      >
        <font-awesome-icon icon="fa-solid fa-paper-plane" class="text-white" />
      </button>
    </form>
  </div>
</template>

<script>
import Comment from "../components/Comment.vue";
import Post from "../components/Post.vue";

export default {
  name: "PostsView",
  components: { Post, Comment },
  data() {
    return {
      id: 1,
      title: "Welcome on JuniorTeam",
      author: "Frank",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.",
      label: "Announcements",
      likes: 100,
      commentText: "",
      comments: [
        {
          author: "Frank",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.",
        },
      ],
    };
  },
  methods: {
    comment() {
      this.comments.push({
        author: "Frank",
        text: commentText,
      });
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
