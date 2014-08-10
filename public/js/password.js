
$(document).ready(function(){
  $('.error').hide();

  $('#create').click(function(event){
    event.preventDefault();   
    validateForm();
  }); 
});      

function validateForm() {
  console.log("Validating form...");
  $('.error').hide();
  alert("clicked");

  var fword = $('#first_word').val();
  var sword = $('#second_word').val();

  var haserrors = false;
  if(fword.length<1) {
    $('#first_word_error').show();
    haserrors = true;
    console.log('bad fword');
  }

  if(sword.length<1) {
    $('#second_word_error').show();
    haserrors = true;
    console.log('bad sword');
  }

  if (!haserrors) {
    submit_form(fword, sword);
  }
}

function submit_form(fword, sword) {
  console.log('Form submitted successfully.');
  $('#display_data').append(
    fword
    +'<li>'+sword+'</li>');
}