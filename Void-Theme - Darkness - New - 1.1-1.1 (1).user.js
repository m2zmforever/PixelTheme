// ==UserScript==
// @name         Void-Theme | Darkness | New | 1.1
// @version      1.1
// @description  hope you'll like this
// @author       Darkness
// @grant 		 GM_xmlhttpRequest
// @grant 		 unsafeWindow
// @icon         https://raw.githubusercontent.com/TouchedByDarkness/PixelPlanet-Bot/master/rounded-avatar-128.png
// @require		 https://raw.githubusercontent.com/mitchellmebane/GM_fetch/master/GM_fetch.min.js
// @require		 https://raw.githubusercontent.com/TouchedByDarkness/PixelPlanet-Void-Bot/master/base64.js
// @connect		 githubusercontent.com
// @connect		 github.com
// @connect		 canvasland.net
// @connect		 pixelplanet.fun
// @connect		 pixmap.fun
// @connect		 pixelya.fun
// @match      *://pixelplanet.fun/*
// @match      *://pixmap.fun/*
// @match      *://canvasland.net/*
// @match      *://pixelya.fun/*
// ==/UserScript==

fetch('https://raw.githubusercontent.com/m2zmforever/pixelgames-void-theme/refs/heads/main/style.css')
.then(res => res.text())
.then(css => {
	const ssv = unsafeWindow.ssv;
	const link = Array.from(document.querySelectorAll('link')).find(link => {
		const href = link.getAttribute('href');
		return (
			link.getAttribute('rel') === 'stylesheet' &&
			link.getAttribute('type') === 'text/css' &&
			href &&
			Object.values(ssv.availableStyles).some(path => href.includes(path)) &&
			!href.includes(ssv.availableStyles.default));
	});

	if(link) {
		link.parentNode.removeChild(link);
	}

	const style = document.createElement('style');
	style.innerHTML = css;
	document.head.appendChild(style);
});

