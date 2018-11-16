import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

const password = document.getElementById('password');
const username = document.getElementById('username');

const username$ = fromEvent(username, 'blur')
	.pipe(map((event) => event.target.value))
	.subscribe((val) => {
		if (val) {
			console.log(val)
		}
	});

const password$ = fromEvent(password, 'input')
	.pipe(map((event) => event.target.value),
	debounceTime(200))
	.subscribe((val) => console.log(val));
