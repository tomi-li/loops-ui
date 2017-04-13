<template>
  <div>
    <h1>List - Single Line</h1>

    <div class="columns">
      <section>
        <h2>list_1</h2>
        <lo-list class="list" :size="1">
          <lo-list-item-single-line title="Single-line list specs"></lo-list-item-single-line>
          <lo-list-item-single-line title="Single-line list specs"></lo-list-item-single-line>
          <lo-list-item-single-line title="Single-line list specs"></lo-list-item-single-line>
          <lo-list-item-single-line title="Single-line list specs"></lo-list-item-single-line>
        </lo-list>
      </section>

      <section>
        <h2>list_2</h2>
        <lo-list class="list" :size="2">
          <lo-list-item-single-line
            title="Single-line list specs"
            subTitle="Subheading"></lo-list-item-single-line>
          <lo-list-item-single-line
            title="Single-line list specs"
            subTitle="Subheading"></lo-list-item-single-line>
          <lo-list-item-single-line
            title="Single-line list specs"
            subTitle="Subheading"></lo-list-item-single-line>
          <lo-list-item-single-line
            title="Single-line list specs"
            subTitle="Subheading"></lo-list-item-single-line>
        </lo-list>
      </section>

      <section>
        <h2>list_3</h2>
        <lo-list class="list" :size="3">
          <lo-list-item-single-line title="Single-line list specs"></lo-list-item-single-line>
          <lo-list-item-single-line title="Single-line list specs"></lo-list-item-single-line>
          <lo-list-item-single-line title="Single-line list specs"></lo-list-item-single-line>
          <lo-list-item-single-line title="Single-line list specs"></lo-list-item-single-line>
        </lo-list>
      </section>


      <section>
        <h2>list_4</h2>
        <lo-list class="list" :size="4">
          <lo-list-item-single-line
            :avatar="require('../assets/avatar.jpg')"
            title="Single-line list specs"></lo-list-item-single-line>
          <lo-list-item-single-line
            :avatar="require('../assets/avatar.jpg')"
            title="Single-line list specs"></lo-list-item-single-line>
          <lo-list-item-single-line
            :avatar="require('../assets/avatar.jpg')"
            title="Single-line list specs"></lo-list-item-single-line>
          <lo-list-item-single-line
            :avatar="require('../assets/avatar.jpg')"
            title="Single-line list specs"></lo-list-item-single-line>
        </lo-list>
      </section>

      <section>
        <h2>list_5</h2>
        <lo-list class="list" :size="5">
          <lo-list-item-single-line
            :avatar="require('../assets/avatar.jpg')"
            title="Single-line list specs"
            button="Button"></lo-list-item-single-line>
          <lo-list-item-single-line
            :avatar="require('../assets/avatar.jpg')"
            title="Single-line list specs"
            button="Button"></lo-list-item-single-line>
          <lo-list-item-single-line
            :avatar="require('../assets/avatar.jpg')"
            title="Single-line list specs"
            button="Button"></lo-list-item-single-line>
          <lo-list-item-single-line
            :avatar="require('../assets/avatar.jpg')"
            title="Single-line list specs"
            button="Button"></lo-list-item-single-line>
        </lo-list>
      </section>

    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss">
  @import "../../src/consts";

  .list {
    width: 320px;
    @include boxShadow;
  }
</style>
