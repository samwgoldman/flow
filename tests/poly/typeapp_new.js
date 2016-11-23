class C<T> {
  x: T;
  m1(x: T) {}
  m2(x: T) {}
}

var c1 = new C;
c1.m1(0);
c1.m2("");
(c1.x: void); // error: number|string ~> void

var c2 = new C<string>;
c2.m1(0); // error: number ~> string
c2.m2("");
(c2.x: void); // error: string ~> void
