import { ReplaySubject } from 'rxjs';
const sub = new ReplaySubject(2);

// emit edilen degerlerden belirtilen deger kadar sondan tekrar eder

sub.next(1);
sub.next(2);
sub.subscribe(console.log);
sub.next(3);
sub.next(4);
sub.subscribe(console.log);
sub.next(5);
