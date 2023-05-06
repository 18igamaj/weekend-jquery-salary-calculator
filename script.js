$(document).ready(onReady);

function onReady() {
  $("#find-them").on("submit", handleEM);
  $('#table').on('click','.delete-button',handleDelete)
}
function handleEM(event) {
  event.preventDefault();

  let first = $("#first-n").val();
  let last = $("#last-n").val();
  let id = $("#id").val();
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
<td><button class='delete-button'>❌</button></td>
</tr>`);
}

function handleDelete(){
	this.closest('tr').remove()
}