love(a, b).
love(b, a).
love(c, b).
love(d, a).
rival(X,Y) :- love(X,Z),love(Y,Z),X \=Y.