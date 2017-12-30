import { map, take, tap } from 'rxjs/operators';
import { Foo } from 'lerna-typescript-demo-base';

const foo = new Foo();

const bars = foo.myFunc();

bars.forEach((bar) => console.log(bar));

const bars$ = foo.myFunc$();

bars$.pipe(
    tap(bars => bars.forEach(b => console.log(b)))
).subscribe();