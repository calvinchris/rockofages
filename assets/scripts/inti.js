function tampilkan(){
	var nama=document.getElementById("nama").value;

    return confirm('Terimakasih, ' + nama);
}


var mybutton = document.getElementById("top");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
