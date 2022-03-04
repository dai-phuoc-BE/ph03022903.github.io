
TweenMax.set($(".box-center"), { opacity: 0 });
TweenMax.staggerTo($(".box-center"), 5, { opacity: 1 }, 0.1);

// $(".button").click(function () {
//   TweenMax.staggerTo($(".box-card"), 1, { y: -700 }, 0);
//   $(".box-card").delay(1000).hide(1000);
//   TweenMax.staggerTo($(".box-center-2"), 5, { opacity: 1 }, 0.1);
// });
$(".button-box-music").click(function () {
  TweenMax.staggerTo($(".box-card"), 1, { y: -700 }, 0);
  $(".box-card").delay(1000).hide(1000);
  TweenMax.staggerTo($(".box-music"), 5, { opacity: 1 }, 0.1);
});
TweenMax.set($(".box-music"), { opacity: 0 });
document.addEventListener(
	"DOMContentLoaded",
	function () {
	  var days = document.querySelector(".days span");
	  var hour = document.querySelector(".hour");
	  var min = document.querySelector(".min");
	  var second = document.querySelector(".second");
  
	  var startDate = new Date(2021,11,06);
	  days.innerText = Math.floor((new Date() - startDate) / 86400000);
	  countTime();
  
	  function countTime() {
		let today = new Date();
		let ms = (today - startDate) % 86400000;
		hour.innerText = Math.floor(ms / 3600000);
		min.innerText = Math.floor((ms % 3600000) / 60000);
		second.innerText = Math.floor(((ms % 3600000) % 60000) / 1000);
	  }
  
	  setInterval(countTime, 1000);
	},
	false
  );
