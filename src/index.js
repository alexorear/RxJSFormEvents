import { fromEvent } from 'rxjs';
import { bufferCount, debounceTime, map } from 'rxjs/operators';

const password = document.getElementById('password');
const username = document.getElementById('username');

let clicks = 0;
let clicking = false;

const email$ = fromEvent(email, 'blur')
	.pipe(map((event) => event.target.value))
	.subscribe((email) => {
		console.log('blur event', email);
		const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const message = document.getElementById('email-message');
		if (emailCheck.test(email)) {
			message.style.color = 'black';
			message.innerText = 'Good Job!'
		} else {
			message.innerText = 'Email Invalid'
			message.style.color = 'red';
		}
	});

const message$ = fromEvent(message, 'keyup')
	.pipe(map((event) => event.target.value),debounceTime(200))
	.subscribe((val) => {
		console.log('textarea keyup debounceTime 200ms', val);
	});

const password$ = fromEvent(password, 'input')
	.pipe(map((event) => event.target.value))
	.subscribe((password) => {
		console.log('Input', password);
		const passCheck = /^[a-zA-Z0-9]{6,18}$/;
		const message = document.getElementById('password-message');
		if (passCheck.test(password)) {
			message.style.color = 'black';
			message.innerText = 'Good Job!'
		} else {
			message.innerText = 'Password Invalid'
			message.style.color = 'red';
		}
	});

	const submit = fromEvent(submitBtn, 'click')
		.pipe(bufferCount(5))
		.subscribe(() => {
			alert('You found the alert!')
		});
