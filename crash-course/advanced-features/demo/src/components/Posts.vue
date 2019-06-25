<template>
  <div>
    <p>Hello</p>
    <button class="btn btn-primary">click</button>
    <br><br>
    <table class="table table-dark">
      <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Title</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="post in posts" :key="post.id">
        <th scope="row">{{ post.id }}</th>
        <td>{{ post.title }}</td>
      </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "Posts",
    data() {
      return {
        posts: [
          {id: 1, title: 'title 1'},
          {id: 2, title: 'title 2'},
          {id: 3, title: 'title 3'},
          {id: 4, title: 'title 4'},
          {id: 5, title: 'title 5'}
        ]
      }
    }
  }
</script>

<style scoped>

</style>
