/* global $, Stripe */
//Document ready.
$(document).on('turbolinks:load', function(){
  var theForm = $('#pro_form');
  var submitBtn = $('#form-submit-btn');
  
  //Set Stripe public key.
  Stripe.setPublishablekey( $('meta[name="stripe-key"]').attr('content') );
  
  //When user clicks form submit btn.
  submitBtn.click(function(event){
    event.preventDefault();
    
    //Collect the credit card fields.
    var ccNum = $('#card_number').val(),
        cvcNum = $('#card_code').val(),
        expMonth = $('#card_month').val(),
        expYear = $('#card_year').val();
    //Send the card info to Stripe.
    Stripe.createToken({
      number: ccNum,
      cvc: cvcNum,
      exp_month: expMonth,
      exp_year: expYear
    }, stripeResponseHandler);
  });
  
  
  //prevent default submission behavior.
  
  
  //Strip will return a card token.
  //inject card token as hidden field into form.
  //Submit form to our rails app.
});