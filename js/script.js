window.onload = function () {

  let sec1Text = document.querySelector("#sec1Text");

  window.addEventListener('scroll', function () {
    let scrollValue = window.scrollY;
    //console.log("scrollY", scrollValue);

    if (scrollValue > 240) {
      sec1Text.style.animation = "textDisappear 1s ease-out forwards";
    } else {
      sec1Text.style.animation = "textSlide 1s ease-out";
    }

    let locationSection4 = $("#section4").offset().top;
    let locationFooter = $("#footerWrap").offset().top;

    if (scrollValue > locationSection4 && scrollValue < (locationFooter-500)) {
      $("#asidePort").css("display","block");
    } else {
      $("#asidePort").css("display","none");
    }

    let sec4Number1 = $("#sec4Number1").offset().top;
    let sec4Number2 = $("#sec4Number2").offset().top;
    let sec4Number3 = $("#sec4Number3").offset().top;
    let sec4Number4 = $("#sec4Number4").offset().top;
    let sec4Number5 = $("#sec4Number5").offset().top;
    let sec4Number6 = $("#sec4Number6").offset().top;
    let sec4Number7 = $("#sec4Number7").offset().top;
    let sec4Number8 = $("#sec4Number8").offset().top;
    let sec4Number9 = $("#sec4Number9").offset().top;
    let sec4Number10 = $("#sec4Number10").offset().top;
    let sec4Number11 = $("#sec4Number11").offset().top;

    if(scrollValue > locationSection4 && scrollValue < sec4Number1 + 200) {
      $("#asideMenu1").css("color", "red");
      $("#asideMenu1").removeClass('xi-heart-o').addClass('xi-heart');
      $("#sec4Number1").css("color", "pink");
    } else {
      $("#asideMenu1").css("color", "black");
      $("#asideMenu1").removeClass('xi-heart').addClass('xi-heart-o');
      $("#sec4Number1").css("color", "black");
    }

    if(scrollValue >=sec4Number1 + 200 && scrollValue < sec4Number2 + 200) {
      $("#asideMenu2").css("color", "red");
      $("#asideMenu2").removeClass('xi-heart-o').addClass('xi-heart');
      $("#sec4Number2").css("color", "skyblue");
    } else {
      $("#asideMenu2").css("color", "black");
      $("#asideMenu2").removeClass('xi-heart').addClass('xi-heart-o');
      $("#sec4Number2").css("color", "black");
    }

    if(scrollValue >= sec4Number2 + 200 && scrollValue < sec4Number3 + 200) {
      $("#asideMenu3").css("color", "red");
      $("#asideMenu3").removeClass('xi-heart-o').addClass('xi-heart');
      $("#sec4Number3").css("color", "orange");
    } else {
      $("#asideMenu3").css("color", "black");
      $("#asideMenu3").removeClass('xi-heart').addClass('xi-heart-o');
      $("#sec4Number3").css("color", "black");
    }
    if(scrollValue >= sec4Number3 + 200 && scrollValue < sec4Number4 + 200) {
      $("#asideMenu4").css("color", "red");
      $("#asideMenu4").removeClass('xi-heart-o').addClass('xi-heart');
      $("#sec4Number4").css("color", "green");
    } else {
      $("#asideMenu4").css("color", "black");
      $("#asideMenu4").removeClass('xi-heart').addClass('xi-heart-o');
      $("#sec4Number4").css("color", "black");
    }
    if(scrollValue >= sec4Number4 + 200 && scrollValue < sec4Number5 + 200) {
      $("#asideMenu5").css("color", "red");
      $("#asideMenu5").removeClass('xi-heart-o').addClass('xi-heart');
      $("#sec4Number5").css("color", "lightcoral");
    } else {
      $("#asideMenu5").css("color", "black");
      $("#asideMenu5").removeClass('xi-heart').addClass('xi-heart-o');
      $("#sec4Number5").css("color", "black");
    }
    if(scrollValue >= sec4Number5 + 200 && scrollValue < sec4Number6 + 200) {
      $("#asideMenu6").css("color", "red");
      $("#asideMenu6").removeClass('xi-heart-o').addClass('xi-heart');
      $("#sec4Number6").css("color", "darkgray");
    } else {
      $("#asideMenu6").css("color", "black");
      $("#asideMenu6").removeClass('xi-heart').addClass('xi-heart-o');
      $("#sec4Number6").css("color", "black");
    }
    if(scrollValue >= sec4Number6 + 200 && scrollValue < sec4Number7 + 200) {
      $("#asideMenu7").css("color", "red");
      $("#asideMenu7").removeClass('xi-heart-o').addClass('xi-heart');
      $("#sec4Number7").css("color", "gray");
    } else {
      $("#asideMenu7").css("color", "black");
      $("#asideMenu7").removeClass('xi-heart').addClass('xi-heart-o');
      $("#sec4Number7").css("color", "black");
    }
    if(scrollValue >= sec4Number7 + 200 && scrollValue < sec4Number8 + 200) {
      $("#asideMenu8").css("color", "red");
      $("#asideMenu8").removeClass('xi-heart-o').addClass('xi-heart');
      $("#sec4Number8").css("color", "gold");
    } else {
      $("#asideMenu8").css("color", "black");
      $("#asideMenu8").removeClass('xi-heart').addClass('xi-heart-o');
      $("#sec4Number8").css("color", "black");
    }
    if(scrollValue >= sec4Number8 + 200 && scrollValue < sec4Number9 + 200) {
      $("#asideMenu9").css("color", "red");
      $("#asideMenu9").removeClass('xi-heart-o').addClass('xi-heart');
      $("#sec4Number9").css("color", "orangered");
    } else {
      $("#asideMenu9").css("color", "black");
      $("#asideMenu9").removeClass('xi-heart').addClass('xi-heart-o');
      $("#sec4Number9").css("color", "black");
    }
    if(scrollValue >= sec4Number9 + 200 && scrollValue < sec4Number10 + 200) {
      $("#asideMenu10").css("color", "red");
      $("#asideMenu10").removeClass('xi-heart-o').addClass('xi-heart');
      $("#sec4Number10").css("color", "lightskyblue");
    } else {
      $("#asideMenu10").css("color", "black");
      $("#asideMenu10").removeClass('xi-heart').addClass('xi-heart-o');
      $("#sec4Number10").css("color", "black");
    }
    if(scrollValue >= sec4Number10 + 200 && scrollValue < sec4Number11 + 200) {
      $("#asideMenu11").css("color", "red");
      $("#asideMenu11").removeClass('xi-heart-o').addClass('xi-heart');
      $("#sec4Number11").css("color", "red");
    } else {
      $("#asideMenu11").css("color", "black");
      $("#asideMenu11").removeClass('xi-heart').addClass('xi-heart-o');
      $("#sec4Number11").css("color", "black");
    }
  });

  //메일 보내기
  $(document).ready(function() {
		emailjs.init("2hKVWlvGyNKnY7YaQ");

    $('#submit').click(function(){
      let templateParams = {
        name: $('#name').val(),
        email : $('#email').val(),
        message : $('#message').val()
      };

      emailjs.send('service_seongkyeong', 'template_ldp9axr', templateParams)
          .then(function(response) {
              alert('이메일이 성공적으로 보내졌습니다!')
              window.location.reload();
          }, function(error) {
              alert('이메일 보내기에 실패했습니다. 다시 시도해주세요!')
          });
    });
  });
}