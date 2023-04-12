const observable = new Observable((subscriber: any) => {
  subscriber.next(10);
  subscriber.next(11);
  subscriber.next(12);
});

// const observable2 = new Observable((subscriber) => {
//   subscriber.next(users);
// });

const observer = {
  next: (value: any) => console.log(value),
};

observable.subscribe(observer);