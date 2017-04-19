<template>
  <lo-page :loading="false">

    <h2>list_13</h2>
    <lo-list :size="13">
      <lo-list-item-dense-line
        text="
            Dense three-line listDense
            Dense three-line listDense
            Dense three-line listDense"
        :avatar="require('../../assets/avatar.jpg')"></lo-list-item-dense-line>
      <lo-list-item-dense-line
        text="
            Dense three-line listDense
            Dense three-line listDense
            Dense three-line listDense"
        :avatar="require('../../assets/avatar.jpg')"></lo-list-item-dense-line>
      <lo-list-item-dense-line
        text="
            Dense three-line listDense
            Dense three-line listDense
            Dense three-line listDense"
        :avatar="require('../../assets/avatar.jpg')"></lo-list-item-dense-line>
      <lo-list-item-dense-line
        text="
            Dense three-line listDense
            Dense three-line listDense
            Dense three-line listDense"
        :avatar="require('../../assets/avatar.jpg')"></lo-list-item-dense-line>
    </lo-list>

    <h2>list_14</h2>
    <lo-list :size="14">
      <lo-list-item-dense-line
        text="
            Dense three-line listDense
            Dense three-line listDense
            Dense three-line listDense
            Dense three-line listDense"
        :avatar="require('../../assets/avatar.jpg')"></lo-list-item-dense-line>
      <lo-list-item-dense-line
        text="
            Dense three-line listDense
            Dense three-line listDense
            Dense three-line listDense
            Dense three-line listDense"
        :avatar="require('../../assets/avatar.jpg')"></lo-list-item-dense-line>
      <lo-list-item-dense-line
        text="
            Dense three-line listDense
            Dense three-line listDense
            Dense three-line listDense
            Dense three-line listDense"
        :avatar="require('../../assets/avatar.jpg')"></lo-list-item-dense-line>
      <lo-list-item-dense-line
        text="
            Dense three-line listDense
            Dense three-line listDense
            Dense three-line listDense
            Dense three-line listDense"
        :avatar="require('../../assets/avatar.jpg')"></lo-list-item-dense-line>
    </lo-list>

    <h2>list_15</h2>

    <lo-list :size="15">
      <lo-list-item-dense-line
        subheading1="Subheading 1"
        subheading2="Subheading 2"
        list="Three-line list"></lo-list-item-dense-line>
      <lo-list-item-dense-line
        subheading1="Subheading 1"
        subheading2="Subheading 2"
        list="Three-line list"></lo-list-item-dense-line>
      <lo-list-item-dense-line
        subheading1="Subheading 1"
        subheading2="Subheading 2"
        list="Three-line list"></lo-list-item-dense-line>
      <lo-list-item-dense-line
        subheading1="Subheading 1"
        subheading2="Subheading 2"
        list="Three-line list"></lo-list-item-dense-line>
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
