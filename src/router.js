import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/Home.vue";
import Comments from "./views/comments/Comments.vue";
import ActiveComment from "./views/comments/active-comment/ActiveComment";
import CommentsList from "./views/comments/comments-list/CommentsList";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/comments",
      name: "comments",
      component: Comments,
      children: [
        {
          path: ":id",
          name: "activeComment",
          component: ActiveComment
        },
        {
          path: "",
          name: "CommentsList",
          component: CommentsList
        }
      ]
    }
  ]
});
