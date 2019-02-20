import { of, fromEvent, pipe } from 'rxjs'; 
import { map, tap, filter } from 'rxjs/operators';

let searchBox = document.getElementById('search-term');

let observable1 = of('Hello');
let searchObservable = fromEvent(searchBox, 'input');

let observer = v => console.log(v);
let dancerObserver = run => {
  console.log('Run: ' + run)
  if(run == 4 || run == 6) {
    console.log('dancing....');
  }
}

searchObservable
  .pipe(
    map(e => e.target.value),
    map( v => v.split(',')),
    map(v => v.pop()),
    filter(v => v != ''),
    filter(v => v >=1 && v <=6)
  )
  .subscribe(dancerObserver);
