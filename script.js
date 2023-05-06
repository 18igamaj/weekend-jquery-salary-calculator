$(document).ready(onReady);

function onReady() {
  $("#find-them").on("submit", handleEM);
  $('#table').on('click','.delete-button',handleDelete)
}
let totalMonth = 0
 

function handleEM(event) {
  event.preventDefault();

  let first = $("#first-n").val();
  let last = $("#last-n").val();
  let id = $("#id").val();
  let anSal = $('#ann-sal').val();
  let title = $("#title").val();
  

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

// totalMonth+=Math.round(anSal/12)
$('#tMon').text(totalMonth)
}

// function handleDelete(){
// 	this.closest('tr').remove()
// }