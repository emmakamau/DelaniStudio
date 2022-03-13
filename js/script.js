$(document).ready(function(){
    $("img.portfolio-img").tooltip({
        tooltipClass: "tooltip"
    })
    $("img#design").click(function(){
        $('div#part-one').removeClass("centered")
        $('p.service-desc').hide()
        $('p#design-desc').show()
        $('div#part-two').addClass("centered")
        $('div#part-three').addClass("centered")
        console.log("part one loaded perfectly")
    })
    $("img#development").click(function(){
        $('div#part-two').removeClass("centered")
        $('p.service-desc').hide()
        $('p#dev-desc').show()
        $('div#part-one').addClass("centered")
        $('div#part-three').addClass("centered")
        console.log("part two loaded perfectly")
    })
    $("img#prod-mngmt").click(function(){
        $('div#part-three').removeClass("centered")
        $('p.service-desc').hide()
        $('p#prod-desc').show()
        $('div#part-one').addClass("centered")
        $('div#part-two').addClass("centered")
        console.log("part three loaded perfectly")
    })
})