mark(bob, harrypotter).
mark(bob, happyDay).
mark(bob, badDay).
mark(alice, oldManAndSea).
follow(alice, bob).
guess(X, Temp) :-
	follow(X, Y),
 	mark(Y, Temp),
 	mark(X, Temp2),
 	Temp \= Temp2.