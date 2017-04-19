<template>
  <lo-page :loading="false">

    <h2>list_6</h2>
    <lo-list :size="6">
      <lo-list-item-two-line
        title="Two-line list specs"
        subTitle="Subheading"></lo-list-item-two-line>
      <lo-list-item-two-line
        title="Two-line list specs"
        subTitle="Subheading"></lo-list-item-two-line>
      <lo-list-item-two-line
        title="Two-line list specs"
        subTitle="Subheading"></lo-list-item-two-line>
      <lo-list-item-two-line
        title="Two-line list specs"
        subTitle="Subheading"></lo-list-item-two-line>
    </lo-list>

    <h2>list_7</h2>
    <lo-list :size="7">
      <lo-list-item-two-line
        title="Two-line list specs"
        subTitle="Subheading"
        :icon="require('../../assets/icon.jpg')"></lo-list-item-two-line>
      <lo-list-item-two-line
        title="Two-line list specs"
        subTitle="Subheading"
        :icon="require('../../assets/icon.jpg')"></lo-list-item-two-line>
      <lo-list-item-two-line
        title="Two-line list specs"
        subTitle="Subheading"
        :icon="require('../../assets/icon.jpg')"></lo-list-item-two-line>
      <lo-list-item-two-line
        title="Two-line list specs"
        subTitle="Subheading"
        :icon="require('../../assets/icon.jpg')"></lo-list-item-two-line>
    </lo-list>

    <h2>list_8</h2>
    <lo-list :size="8">
      <lo-list-item-two-line
        title="Two-line list specs"
        subTitle="Subheading"
        :avatar="require('../../assets/avatar.jpg')"></lo-list-item-two-line>
      <lo-list-item-two-line
        title="Two-line list specs"
        subTitle="Subheading"
        :avatar="require('../../assets/avatar.jpg')"></lo-list-item-two-line>
      <lo-list-item-two-line
        title="Two-line list specs"
        subTitle="Subheading"
        :avatar="require('../../assets/avatar.jpg')"></lo-list-item-two-line>
      <lo-list-item-two-line
        title="Two-line list specs"
        subTitle="Subheading"
        :avatar="require('../../assets/avatar.jpg')"></lo-list-item-two-line>
    </lo-list>

    <h2>list_9</h2>
    <lo-list :size="9">
      <lo-list-item-two-line
        title="Two-line list specs"
        subTitle="Subheading"
        :avatar="require('../../assets/avatar.jpg')"
        :icon="require('../../assets/icon.jpg')"></lo-list-item-two-line>
      <lo-list-item-two-line
        title="Two-line list specs"
        subTitle="Subheading"
        :avatar="require('../../assets/avatar.jpg')"
        :icon="require('../../assets/icon.jpg')"></lo-list-item-two-line>
      <lo-list-item-two-line
        title="Two-line list specs"
        subTitle="Subheading"
        :avatar="require('../../assets/avatar.jpg')"
        :icon="require('../../assets/icon.jpg')"></lo-list-item-two-line>
      <lo-list-item-two-line
        title="Two-line list specs"
        subTitle="Subheading"
        :avatar="require('../../assets/avatar.jpg')"
        :icon="require('../../assets/icon.jpg')"></lo-list-item-two-line>
    </lo-list>

    <h2>list_10</h2>
    <lo-list :size="10">
      <lo-list-item-two-line
        title="Two-line list specs"
        subTitle="Subheading"
        :avatar="require('../../assets/avatar.jpg')"
        :leftIcon="require('../../assets/icon.jpg')"></lo-list-item-two-line>
      <lo-list-item-two-line
        title="Two-line list specs"
        subTitle="Subheading"
        :avatar="require('../../assets/avatar.jpg')"
        :leftIcon="require('../../assets/icon.jpg')"></lo-list-item-two-line>
      <lo-list-item-two-line
        title="Two-line list specs"
        subTitle="Subheading"
        :avatar="require('../../assets/avatar.jpg')"
        :leftIcon="require('../../assets/icon.jpg')"></lo-list-item-two-line>
      <lo-list-item-two-line
        title="Two-line list specs"
        subTitle="Subheading"
        :avatar="require('../../assets/avatar.jpg')"
        :leftIcon="require('../../assets/icon.jpg')"></lo-list-item-two-line>
    </lo-list>

    <h2>list_11</h2>
    <lo-list :size="11">
      <lo-list-item-two-line
        subTitle="Subheading"
        list="Two-line list"></lo-list-item-two-line>
      <lo-list-item-two-line
        subTitle="Subheading"
        list="Two-line list"></lo-list-item-two-line>
      <lo-list-item-two-line
        subTitle="Subheading"
        list="Two-line list"></lo-list-item-two-line>
      <lo-list-item-two-line
        subTitle="Subheading"
        list="Two-line list"></lo-list-item-two-line>
    </lo-list>

    <h2>list_12</h2>
    <lo-list :size="12">
      <lo-list-item-two-line
        title="Two-line list specs"
        subTitle="Subheading"
        :avatar="require('../../assets/avatar.jpg')"
        :leftIcon="require('../../assets/icon.jpg')"></lo-list-item-two-line>
      <lo-list-item-two-line
        title="Two-line list specs"
        subTitle="Subheading"
        :avatar="require('../../assets/avatar.jpg')"
        :leftIcon="require('../../assets/icon.jpg')"></lo-list-item-two-line>
      <lo-list-item-two-line
        title="Two-line list specs"
        subTitle="Subheading"
        :avatar="require('../../assets/avatar.jpg')"
        :leftIcon="require('../../assets/icon.jpg')"></lo-list-item-two-line>
      <lo-list-item-two-line
        title="Two-line list specs"
        subTitle="Subheading"
        :avatar="require('../../assets/avatar.jpg')"
        :leftIcon="require('../../assets/icon.jpg')"></lo-list-item-two-line>
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
