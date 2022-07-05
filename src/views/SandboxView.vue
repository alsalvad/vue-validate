<template>
  <div class="row">
    <div class="card">
      <div class="card-body text-dark">
        <h1>Scroll</h1>
        <span id="percent">0</span>
        <br>
        _<br>
        _<br>
        _<br>
        _<br>
        _<br>
        _<br>
        _<br>
        _<br>
        _<br>
        _<br>
        _<br>
        _<br>
        _<br>
        _<br>
        _<br>
        _<br>
        _<br>
        _<br>
        _<br>
        _<br>
        _<br>
        _<br>
        _<br>
        _<br>
        _<br>
        _<br>
        _<br>
        _<br>
        _<br>
        _<br>
        _<br>
      </div>
    </div>
  </div>
</template>

<script>
import * as jquery from 'https://code.jquery.com/jquery-3.6.0.min.js';

$(window).on('scroll', function(){
  let s = $(window).scrollTop(),
      d = $(document).height(),
      c = $(window).height();

  let scrollPercent = ((s / (d - c)) * 100).toFixed(0);
  $('#percent').html(scrollPercent);
  $('.card-body').css('background', `rgb(0,0,0,${scrollPercent}%)`)

  console.clear();
  console.log(scrollPercent);
});

import { defineComponent } from "vue";

export default defineComponent({
  data(){
    return{

    }
  }
});
</script>