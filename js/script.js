// JQuery functions
$(document).ready(function(){
    // Hover over portfolio images to get a tooltip with the title
    $("img.portfolio-img").tooltip()

    //Selected form elements take the styling described in css classes
    $("input").focus(function(){
        $(this).addClass("form-control");
      });
      $("input").blur(function(){
        $(this).addClass("form-control");
      });

    // Click on image to display description while hiding the rest of the service icons
    if (window.matchMedia('(max-width: 768px)').matches){
        $("img#design").click(function(){
            $('div#part-one').removeClass("centered")
            $('p.service-desc').hide()
            $('p#design-desc').show()
        })
        $("img#development").click(function(){
            $('div#part-two').removeClass("centered")
            $('p.service-desc').hide()
            $('p#dev-desc').show()
        })
        $("img#prod-mngmt").click(function(){
            $('div#part-three').removeClass("centered")
            $('p.service-desc').hide()
            $('p#prod-desc').show()
        })
    }else{
        $("img#design").click(function(){
            $('div#part-one').removeClass("centered")
            $('p.service-desc').hide()
            $('p#design-desc').show()
            $('div#part-two').addClass("centered")
            $('div#part-three').addClass("centered")
        })
        $("img#development").click(function(){
            $('div#part-two').removeClass("centered")
            $('p.service-desc').hide()
            $('p#dev-desc').show()
            $('div#part-one').addClass("centered")
            $('div#part-three').addClass("centered")
        })
        $("img#prod-mngmt").click(function(){
            $('div#part-three').removeClass("centered")
            $('p.service-desc').hide()
            $('p#prod-desc').show()
            $('div#part-one').addClass("centered")
            $('div#part-two').addClass("centered")
        })
    }
    //Function to hide paragraphs in services section of about us
    $("p.service-desc").click(function(){
        $("p.service-desc").hide()
    })
})


//Javascript functions

function msgSubmitted(){
    var firstName = document.getElementById('first-name').value
    var lastName = document.getElementById('last-name').value
    var message = document.getElementById('text-area').value
    console.log(firstName)
    if(firstName !=="" && lastName!=="" && message!==""){
        alert(`Hello ${firstName}, thank you for reaching out to us. Your message has been received. Someone on the team will reach out to you soon.`)
    }else{
        alert("Form fields cannot be empty!")
    }
}





