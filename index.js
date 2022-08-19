(function () {
	const viewCookie = document.querySelector('.cookie')
	const button = document.querySelector('.button')

	setTimeout(function () {
		viewCookie.classList.add('animationCookieUp')
	}, 3000)

	button.addEventListener('click', function () {
		viewCookie.classList.remove('animationCookieUp')
		viewCookie.classList.add('animationCookieDown')

	})
})()
