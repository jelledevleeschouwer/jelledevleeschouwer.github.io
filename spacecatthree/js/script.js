var isLarge, isMedium, isSmall, checkSize;

isSmall = function() {
  return matchMedia(Foundation.media_queries['small']).matches && !matchMedia(Foundation.media_queries.medium).matches;
};

isMedium = function() {
  return matchMedia(Foundation.media_queries['medium']).matches && !matchMedia(Foundation.media_queries.large).matches;
};

isLarge = function() {
  return matchMedia(Foundation.media_queries['large']).matches;
};

checkSize = function() {
	if (isSmall()) {
		var x = document.getElementsByClassName("menu-item");
		for (var i = 0; i < x.length; i++) {
			x[i].style.height = "33.33%";
		}
	} else {
		var x = document.getElementsByClassName("menu-item");
		for (var i = 0; i < x.length; i++) {
			x[i].style.height = "100%";
		}
	}
};

window.onresize = checkSize;
window.onload = checkSize;
