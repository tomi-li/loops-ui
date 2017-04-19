<template>
  <lo-page :loading="false">
    <h2> List 1</h2>
    <lo-list>
      <lo-list-item-single-line
        title="Test"
        subTitle="TestSubtitle"></lo-list-item-single-line>
      <lo-list-item-single-line
        title="Test"
        subTitle="TestSubtitle"></lo-list-item-single-line>
      <lo-list-item-single-line
        title="Test"
        subTitle="TestSubtitle"></lo-list-item-single-line>
      <lo-list-item-single-line
        title="Test"
        subTitle="TestSubtitle"></lo-list-item-single-line>
    </lo-list>
    <h2>List 2</h2>
    <lo-list :size="2">
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
    <h2>List 3</h2>
    <lo-list :size="3">
      <lo-list-item-single-line
        title="Single-line list specs"
        :icon="require('../../assets/icon.jpg')"
        :iconClick="iconClick"></lo-list-item-single-line>
      <lo-list-item-single-line
        title="Single-line list specs"
        :icon="require('../../assets/icon.jpg')"
        :iconClick="iconClick"></lo-list-item-single-line>
      <lo-list-item-single-line
        title="Single-line list specs"
        :icon="require('../../assets/icon.jpg')"
        :iconClick="iconClick"></lo-list-item-single-line>
      <lo-list-item-single-line
        title="Single-line list specs"
        :icon="require('../../assets/icon.jpg')"
        :iconClick="iconClick"></lo-list-item-single-line>
      <lo-list-item-single-line
        title="Single-line list specs"
        :icon="require('../../assets/icon.jpg')"
        :iconClick="iconClick"></lo-list-item-single-line>
    </lo-list>

    <h2>List 4</h2>
    <lo-list :size="4">
      <lo-list-item-single-line
        :avatar="require('../../assets/avatar.jpg')"
        title="Single-line list specs"></lo-list-item-single-line>
      <lo-list-item-single-line
        :avatar="require('../../assets/avatar.jpg')"
        title="Single-line list specs"></lo-list-item-single-line>
      <lo-list-item-single-line
        :avatar="require('../../assets/avatar.jpg')"
        title="Single-line list specs"></lo-list-item-single-line>
      <lo-list-item-single-line
        :avatar="require('../../assets/avatar.jpg')"
        title="Single-line list specs"></lo-list-item-single-line>
    </lo-list>

    <h2>List 5</h2>
    <lo-list :size="5">
      <lo-list-item-single-line
        :avatar="require('../../assets/avatar.jpg')"
        title="Single-line list specs"
        button="Button"></lo-list-item-single-line>
      <lo-list-item-single-line
        :avatar="require('../../assets/avatar.jpg')"
        title="Single-line list specs"
        button="Button"></lo-list-item-single-line>
      <lo-list-item-single-line
        :avatar="require('../../assets/avatar.jpg')"
        title="Single-line list specs"
        button="Button"></lo-list-item-single-line>
      <lo-list-item-single-line
        :avatar="require('../../assets/avatar.jpg')"
        title="Single-line list specs"
        button="Button"></lo-list-item-single-line>
    </lo-list>
  </lo-page>
</template>

<script>
  export default {
    methods: {
      iconClick() {
        console.log('iconClick');
      },
    },
  };
</script>
