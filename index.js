$(document).on("ready", function(){
    defineSize();

})

function defineSize(){
    $(".form_container .slider").each(function(i, el) {
        $(el).css({
            "background-image": "url("+$(el).data("background")+")",
            "height": ($(".form_container").with()*0.45)+"px"
        })
    })
}