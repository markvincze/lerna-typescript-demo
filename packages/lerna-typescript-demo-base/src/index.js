import { BehaviorSubject } from 'rxjs/BehaviorSubject';

function Foo() {
}

const dummyBars = [
    {
      myField: 'TestValue1'
    },
    {
      myField: 'TestValue2'
    },
    {
      myField: 'TestValue3'
    }
  ];

Foo.prototype.myFunc = function myFunc () {
  return dummyBars;
}

Foo.prototype.myFunc$ = function myFunc$ () {
  return new BehaviorSubject(dummyBars);
}

export default {
  Foo
};
