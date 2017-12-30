import { Observable } from 'rxjs';

export interface Bar {
  myField: string;
}

export class Foo {
  myFunc(): Bar[];
  myFunc$(): Observable<Bar[]>;
}
