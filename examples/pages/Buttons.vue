<template>
  <div>
    <h1>Buttons</h1>

    <div class="columns">
      <section>
        <h2>
          <span>bt1</span>
          <small>(Size: 240 * 42)</small>
        </h2>

        <div class="button-container">
          <lo-button title="Submit" :type="['basic', 'primary']" :onPress="log"></lo-button>
          <div class="description">
            <p>Button asset: bt_new_line_normal.png</p>
            <p>Font size: 14</p>
          </div>
        </div>

        <div class="button-container">
          <lo-button title="Submit" :type="['basic', 'primary', 'active']" :onPress="log"></lo-button>
          <div class="description">
            <p>Button asset: bt_new_line_pressed.png</p>
            <p>Font size: 14</p>
          </div>
        </div>

        <div class="button-container">
          <lo-button title="Submit" :type="['basic', 'disabled']" :onPress="log"></lo-button>
          <div class="description">
            <p>Button asset: bt_new_line_pressed.png</p>
            <p>Font size: 14</p>
          </div>
        </div>
      </section>

      <section>
        <h2>
          <span>bt2</span>
          <small>(Size: 240 * 42)</small>
        </h2>

        <div class="button-container">
          <lo-button title="Submit" :type="'primary'" :onPress="log"></lo-button>
          <div class="description">
            <p>Button asset: bt_new_normal.png</p>
            <p>Font size: 14</p>
          </div>
        </div>

        <div class="button-container">
          <lo-button title="Submit" :type="['primary', 'active']" :onPress="log"></lo-button>
          <div class="description">
            <p>Button asset: bt_new_pressed.png</p>
            <p>Font size: 14</p>
          </div>
        </div>

        <div class="button-container">
          <lo-button title="Submit" :type="'disabled'" :onPress="log"></lo-button>
          <div class="description">
            <p>Button asset: bt_new_disable.png</p>
            <p>Font size: 14</p>
          </div>
        </div>
      </section>

      <section>
        <h2>
          <span>bt3</span>
          <small>(Size: 180 * 32)</small>
        </h2>

        <div class="button-container">
          <lo-button title="Normal" :type="'primary'" size="small" :onPress="log"></lo-button>
          <div class="description">
            <p>Button asset: bt_new_m_normal.png</p>
            <p>Font size: 13</p>
          </div>
        </div>

        <div class="button-container">
          <lo-button title="Pressed" :type="['primary', 'active']" size="small" :onPress="log"></lo-button>
          <div class="description">
            <p>Button asset: bt_new_m_pressed.png</p>
            <p>Font size: 13</p>
          </div>
        </div>

        <div class="button-container">
          <lo-button title="Secondary" :type="'secondary'" size="small" :onPress="log"></lo-button>
          <div class="description">
            <p>Button asset: bt_new_m_focus.png</p>
            <p>Font size: 13</p>
          </div>
        </div>

        <div class="button-container">
          <lo-button title="Disabled" :type="'disabled'" size="small" :onPress="log"></lo-button>
          <div class="description">
            <p>Button asset: bt_new_m_disable.png</p>
            <p>Font size: 13</p>
          </div>
        </div>
      </section>

      <section>
        <h2>
          <span>bt4</span>
          <small>(Size: 92 * 28)</small>
        </h2>

        <div class="button-container">
          <lo-button title="Normal" :type="['primary','basic']" size="tiny" :onPress="log"></lo-button>
          <div class="description">
            <p>Button asset: bt_new_line_s_normal.png</p>
            <p>Font size: 13</p>
          </div>
        </div>

        <div class="button-container">
          <lo-button title="Pressed" :type="['basic', 'primary', 'active']" size="tiny" :onPress="log"></lo-button>
          <div class="description">
            <p>Button asset: bt_new_line_s_pressed.png</p>
            <p>Font size: 13</p>
          </div>
        </div>

        <div class="button-container">
          <lo-button title="Disabled" :type="['basic', 'disabled']" size="tiny" :onPress="log"></lo-button>
          <div class="description">
            <p>Button asset: bt_new_line_s_disable.png</p>
            <p>Font size: 13</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Link (Web Only)</h2>
        <lo-button title="Link" type="link" :onPress="log"></lo-button>
      </section>

    </div>

  </div>
</template>

<script>
  export default {
    methods: {
      log() {
        console.log('clicked');
      },
    },
  };
</script>


<style lang="scss" scoped>
  @import "../../src/consts";

  .button-container {
    margin: 0 0 50px;
    text-align: center;

    .description {
      margin: 10px 0;
      p {
        font-size: 13px;
        font-weight: bold;
        margin: 4px 0;
      }
    }

  }
</style>
