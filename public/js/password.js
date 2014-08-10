$(function(){
  $('#create').click(function(e){
    e.preventDefault();
    if($("#first_word").val() == '' {
      alert("empty"); 
      redirect_to("/password")
    }
    else if($("#second_word").val() == '']
      alert("empty"); 
      redirect_to("/password")
    }
    else if ($("#first_word").val().length <= 5){
      alert("empty"); 
      redirect_to("/password")
    }
    else if ($("#second_word").val().length <= 5){
      alert("empty"); 
      redirect_to("/password")
    }
    else{
      return true;
      redirect_to("/password")
    }
  })
});
