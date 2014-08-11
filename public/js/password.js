

$(document).ready(function(){
  $('.error').hide();

  $('#create').click(function(e){
    validateForm();
    e.preventDefault();   
  }); 
});      

function validateForm() {
  console.log("Validating form...");
  $('.error').hide();
  
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
    submitForm();
    
  }
}

function submitForm() {
  console.log('Form submitted successfully.');
  document.myform.action = '/password';
  return true;
}