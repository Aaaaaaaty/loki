max_in_list([X], X). 
max_in_list([First, Second | Tail], X) :-
    First > Second,      
    max_in_list([First | Tail], X). 
max_in_list([_, Second | Tail], X) :-
    max_in_list([Second | Tail], X).