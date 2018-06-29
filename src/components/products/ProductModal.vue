<template>
  <generic-modal v-show="show" @close="close">
    <div class="modal-header">
      <h3>Add new question</h3>
      <!-- <img class="product-image" v-bind:src="data.title"> -->
    </div>

    <div class="modal-body">
        <!-- {{info.title}} -->
        <form>
           
            <p>
                Q: <input class="faq-style" style="height: 30px;" v-model="faq.question" placeholder="enter question..">
            </p>
            <p>
                A: <textarea class="faq-style" style="height: 40px;" v-model="faq.answer" placeholder="add multiple lines"></textarea>
            </p>
            <button class="ui primary button save-button">
                Save
            </button>
        </form>
    </div>
      
    <div class="modal-footer text-right">
        <!-- <button class="modal-default-button" @click="close()">CLOSE</button> -->
    </div>
    
  </generic-modal>
</template>

<style scoped>
.faq-style{
    width: 90%;
}
.save-button{
    margin-left: 82%;
}
/** stuff that comes from the INTERNET
*   change it later on to SemanticUI stuff
*/
.modal-header h3 {
  margin-top: 0;
}

.modal-body {
  margin: 20px 0;
}

.form-label {
  display: block;
  margin-bottom: 1em;
}

.form-label > .form-control {
  margin-top: 0.5em;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.5em 1em;
  line-height: 1.5;
  border: 1px solid #ddd;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.product-image {
  height: 100%;
}
</style>


<script>
import GenericModal from './../modals/GenericModal'
import Vue from 'vue';
Vue.component('generic-modal', GenericModal);

export default {
  props: ['show', 'info'],
  methods: {
    close() {
      document.body.style.overflowY = 'auto';
      this.$emit('close');
    }
  },

  data() {
    return {
      faqs: [],
      faq: {
        question: null,
        answer: null
      }
    };
  }
};
</script>
