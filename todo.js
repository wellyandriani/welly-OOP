function addtask(){
    this.task = ""
}
let newtask = new addtask()
function create(){
    newtask.task = form.task.value
    $("#output").append("<li>" + newtask.task + "</li>")
    $("#task").val("")
}

$(document).on("click", "li", function(){
$(this).toggleClass('strike').fadeout('slow')
})