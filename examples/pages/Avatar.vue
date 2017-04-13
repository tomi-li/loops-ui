<template>
  <div class="avatar-page">
    <h1>Avatar</h1>

    <section>
      <b>avatar_1</b>
      <lo-avatar :src="require('../assets/avatar.jpg')" :size="1"></lo-avatar>
      <b>80*80</b>
    </section>

    <section>
      <b>avatar_2</b>
      <lo-avatar :src="require('../assets/avatar.jpg')" :size="2"></lo-avatar>
      <b>55*55</b>
    </section>

    <section>
      <b>avatar_3</b>
      <lo-avatar :src="require('../assets/avatar.jpg')" :size="3"></lo-avatar>
      <b>40*40</b>
    </section>

    <section>
      <b>avatar_4</b>
      <lo-avatar :src="require('../assets/avatar.jpg')" :size="4"></lo-avatar>
      <b>36*36</b>
    </section>

    <section>
      <b>avatar_5</b>
      <lo-avatar :src="require('../assets/avatar.jpg')" :size="5"></lo-avatar>
      <b>28*28</b>
    </section>
  </div>
</template>

<script>
  export default {};
</script>


<style lang="scss">
  .avatar-page {
    width: 240px;

    section {
      margin: 20px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
