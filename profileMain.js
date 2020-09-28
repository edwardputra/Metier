$('.navs ul li').click(function() {
	$(this).addClass("actived").siblings().removeClass('actived');
})

// const tabBtn = document.querySelectorAll('.navs ul li');
// const tabeds = document.querySelectorAll('.tabeds');

// function tabeds(panelIndex) {
// 	tabeds.forEach(function(node) {
// 		node.style.display = 'none';
// 	});
// 	tabeds[panelIndex].style.display = "block";
// }
// tabeds(0);

// let bio = document.querySelectorAll('.bio');

// function bioText() {
// 	bio.oldText = bio.innerText;
// 	bio.innerText = bio.innerText.substring(0, 100) + "...";
// 	bio.innerHTML += "%nbsp;" + '<span onclick='addLength()' id='see-more-bio'> See More</span>';
// }

// bioText();

// function addLength() {
// 	bio.innerHTML = bio.oldText;
// 	bio.innerHTML += "%nbsp;" + '<span onclick='bioText()' id='see-less-bio'> See Less</span>';
// }