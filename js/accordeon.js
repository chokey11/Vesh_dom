var service_menu = document.getElementByclass('service_menu');
		service_menu.addEventListener('click', change);
		function change(event) {
			var targ = event.target;
			if (targ.tagName !== 'li') return; 
			if (targ.classList.contains('select')) {
				hideAll();
			} else {
				hideAll();
				targ.classList.add('select');
				showText(targ.nextElementSibling);
			}
		}
		function hideAll() {
			var liEl = service_menu.querySelectorAll('li');
			var UlEl = service_menu.querySelectorAll('ul');
			for (var i = 0; i < h3El.length; i++) {
				h3El[i].classList.remove('select');
			}
			for (var i = 0; i < divEl.length; i++) {
				divEl[i].style.height = '0';
			}
		}
		function showText(textEl) {
			textEl.style.height = textEl.scrollHeight + 'px';
		}
	