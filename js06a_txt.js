"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
      Author: Angel Carmichael
      Date:   3/25/25

      Filename: js06a.js
 */

window.addEventListener('load',function(){
      let orderForm = document.forms.orderForm
      let model = orderForm.elements.model

      // select Model selection list when form opens
      model.focus()
});

