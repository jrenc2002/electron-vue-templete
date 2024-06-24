<template>
  <div>
    <div>
      <form @submit.prevent="handleSubmit">
        <input v-model="title" type="text" placeholder="title" />
        <button type="submit">add</button>
      </form>
    </div>
    <div class="bg-blue-400 m-2" v-for="post in postList" :key="post.id">
      {{ post.title }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { database } from './db';
import { posts } from '../../db/schema';

const postList = ref([]);
const title = ref('');

// 对应 React 中的 useEffect，我们使用 onMounted
onMounted(async () => {
  const result = await database.query.posts.findMany();
  postList.value = result;
});

async function handleSubmit() {
  if (title.value) {
    await database.insert(posts).values({
      id: Math.floor(Math.random() * 1000),
      title: title.value
    });

    // refetch
    const result = await database.query.posts.findMany();
    postList.value = result;
    title.value = ''; // Clear the input after submitting
  }
}
</script>
