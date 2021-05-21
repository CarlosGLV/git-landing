const newsletter= document.querySelector('section#newsletter form');

newsletter.addEventListener('submit', (e) => {
	newsletterValidate(e);
});

const email = document.querySelector('#email');
const user = document.querySelector('#user');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function newsletterValidate(e) {
	e.preventDefault();
	if ( !er.test(email.value) && email.value === '' ) {
		email.classList.add('error');
		return;
	} else {
		newsletter.classList.add('disabled');

		const alert = document.createElement('div');
		alert.innerHTML = '<p>Thank you for subscribing to our newsletter.</p>';
    	alert.classList.add('alert');
		newsletter.appendChild(alert);

		setTimeout( () => {
			alert.remove();
			resetForm();
		}, 3000);

	}
}

function resetForm() {
	newsletter.classList.remove('disabled');
	email.classList.remove('error');
	email.value = '';
	user.value = '';
}


/* ********************* */
const offer = document.querySelector('section#offer');
const closeBtn = document.querySelector('section#offer i.icon-close');
const countdown = document.querySelector('section#offer p.countdown');

closeBtn.addEventListener('click', () => {
	offer.remove();
});
document.addEventListener('DOMContentLoaded', () => {
	countdownUpdate();
});

function countdownUpdate() {
	const finishDate = new Date("may 31, 2021 00:00:00").getTime();
	//console.log(dateFinish);
	setInterval( () => {
		let nowDate = new Date().getTime();
		let distance = finishDate - nowDate;
		
		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
		let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);

		let daysFormat = '';
		let hoursFormat = '';
		let minutesFormat = '';
		let secondsFormat = '';

		if (days < 10) {
			daysFormat = '0' + days;
		} else {
			daysFormat = days;
		}
		if (hours < 10) {
			hoursFormat = '0' + hours;
		} else {
			hoursFormat = hours;
		}
		if (minutes < 10) {
			minutesFormat = '0' + minutes;
		} else {
			minutesFormat = minutes;
		}
		if (seconds < 10) {
			secondsFormat = '0' + seconds;
		} else {
			secondsFormat = seconds;
		}

		countdown.innerHTML = daysFormat + ' days / ' + hoursFormat + ' : ' + minutesFormat + ' : ' + secondsFormat;

		//
		if (distance < 0) {
		  clearInterval();
		  countdown.innerHTML = "Expired offer";
		}
	  }, 1000);

}