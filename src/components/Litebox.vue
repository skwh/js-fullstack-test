<template>
  <div class="lightbox">
    <img :src="this.createPath(previousImageUrl)" class="hidden" />
    <button v-on:click="previous()"
            :disabled="previousImageIdx < 0"
            class="left">
            <<
    </button>
    <transition>
      <img :src="this.createPath(currentImageUrl)" />
    </transition>
    <button v-on:click="next()"
            :disabled="nextImageIdx == this.images.length"
            class="right">
            >>
    </button>
    <img :src="this.createPath(nextImageUrl)" class="hidden" />
  </div>
</template>

<script>
export default {
  name: 'Lightbox',
  props: ['images', 'captions', 'prefix'],
  data() {
    return {
      previousImageIdx: -2,
      currentImageIdx: -1,
      nextImageIdx: 0,
      previousImageUrl: '',
      currentImageUrl: '',
      nextImageUrl: '',
    }
  },
  methods: {
    previous() {
      this.previousImageIdx -= 1;
      this.currentImageIdx -= 1;
      this.nextImageIdx -= 1;
      this.previousImageUrl = this.images[this.previousImageIdx % this.images.length];
      this.currentImageUrl = this.images[this.currentImageIdx % this.images.length];
      this.nextImageUrl = this.images[this.nextImageIdx % this.images.length];
    },
    next() {
      this.previousImageIdx += 1;
      this.currentImageIdx += 1;
      this.nextImageIdx += 1;
      this.previousImageUrl = this.images[this.previousImageIdx % this.images.length];
      this.currentImageUrl = this.images[this.currentImageIdx % this.images.length];
      this.nextImageUrl = this.images[this.nextImageIdx % this.images.length];
    },
    createPath(fileName) {
      return '../../static/' + this.prefix + '/' + fileName;
    }
  },
  mounted: function() {
    this.next();
  }
}
</script>

<style scoped>
  .lightbox {
      height: 65vh;
      display: flex;
      justify-content: space-around;
  }

  img {
    transition: all 1s cubic-bezier(.55,0,.1,1);
    display: block;
    height: 100%;
    margin: auto;
  }

  button {
    border: none;
    background-color: transparent;
    font-family: "Space Mono", monospace;
    color: white;
    font-size: 1.5rem;
    transition: all 0.5s cubic-bezier(.55,0,.1,1);
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }

  button[disabled] {
    color: grey;
    transition: none;
  }

  button.left:hover {
      transform: translateX(-0.5vw);
  }

  button.right:hover {
      transform: translateX(0.5vw);
  }

  .v-enter, .v-leave-to {
    scale: 0.9;
  }

  .v-enter-to, .v-leave {
    scale: 1;
  }

  .v-enter-active {
    transform: translate(-50vh, 0);
  }
  .v-leave-active {
    transform: translate(50vh, 0);
  }

  .hidden {
    display: none;
  }
</style>
