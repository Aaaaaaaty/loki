room(kitchen). 
room(office). 
room(hall). 
room('dining room'). 
room(cellar). 

%第一个参数代表物体的名称 第二个参数表示物体的位置
location(desk, office).
location(apple, kitchen).
location(flashlight, desk).
location('washing machine', cellar). 
location(nani, 'washing machine').
location(broccoli, kitchen). 
location(crackers, kitchen).
location(computer, office).

%两个房间有门 应该定义为双向
door(office, hall). 
door(kitchen, office).
door(hall, 'dining room'). 
door(kitchen, cellar).
door('dining room', kitchen).

%物体属性
edible(apple). 
edible(crackers). 
tastes_yucky(broccoli). 

%手电筒的状态和玩家初始位置
turned_off(flashlight).
here(kitchen).

where_food(X,Y) :- location(X,Y), edible(X).
where_food(X,Y) :- location(X,Y), tastes_yucky(X). 

connect(X,Y) :- door(X,Y). 
connect(X,Y) :- door(Y,X).

human(world).
hello(Who) :- human(Who),nl.

match(hello,douban).
match(douban,hello).
%% match(X,hi).
greet(X,Y) :- match(X,Y).
greet(X) :- not(match(X,Y)),match(X,hi).
%% greet(hi,X) :- fail.
