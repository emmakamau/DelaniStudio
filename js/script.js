// JQuery functions
$(document).ready(function(){
    // Hover over portfolio images to get a tooltip with the title
    $("img.portfolio-img").tooltip({
        tooltipClass: "tooltip"
    })

    //Selected form elements take the styling described in css classes
    $("input").focus(function(){
        $(this).addClass("form-control");
      });
      $("input").blur(function(){
        $(this).addClass("form-control");
      });

    // Click on image to display description while hideing the rest of the service icons
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


//Javascript functions

function msgSubmitted(){
    firstName = document.getElementById('first-name').value
    lastName = document.getElementById('last-name').value
    message = document.getElementById('text-area').value

    if(firstName==='' && lastName==='' && message===''){
        alert("Form fields cannot be empty!")
    }else{
        alert(`Hello ${firstName}, thank you for reaching out to us. Your message has been received. Someone on the team will reach out to you soon.`)
    }
}