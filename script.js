$(document).ready(onReady);

//created my document

function onReady() {
  $("#find-them").on("submit", handleEM);
  $('#table').on('click','.delete-button',handleDelete)
}
//created my onReady function to run my functions 
// on the dom!
let totalMonth = 0
 // set my totalMonth variable to 0 to create my count


//started my event handler function to handle my events
function handleEM(event) {
  event.preventDefault();

  let first = $("#first-n").val();
  let last = $("#last-n").val();
  let id = $("#id").val();
  let anSal = $('#ann-sal').val();
  let title = $("#title").val();
  //set variables inside my function to be able to 
  //call back in my append and set those variables to my jQuery
  // val() method to be input onto my dom
/// inside the append we created all this information to be added onto
//  our DOM after the user submits their input
// it also brings out our delete button after the user submits
  $("#table").append(`
<tr>
<td>
${first}
</td>
<td>
${last}
</td>
<td>
${id}
</td>
<td>
${title}
</td>
<td>
$
${anSal}
<td>
<td><button class='delete-button'>❌</button></td>
</tr>`);
// created a new element dynamically with the class delete-button

totalMonth+=Math.round(anSal/12)
$('#tMon').text(totalMonth)
if(totalMonth > 20000){
$('#total-MS').css('background-color','red')

// made out variable 'totalMonth' count upwards 
//then we used the Math.round method to give us a whole number
// we also set our total monthly to be the input anSal is divided by 12
// than we made a conditional to change our background color if the totalMonthly exceeded 20,000


}
}


function handleDelete(){
	this.closest('tr').remove()

}

// finally we created our delete function 
// what this does is that whenever the user
//clicks on the delete button it will remove the closest 'tr' element