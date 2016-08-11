# 问题描述

1. 描述情敌关系 *rival* . 情敌特指向同一爱慕对象追求爱情的对手。
    ```prolog
    love(a, b).
    love(b, a).
    love(c, b).
    love(d, a).

    % finish rival/2
    ```

    以上为参考知识库，可以按照自己喜好声明love关系（包括名字哦～）。

    ```prolog
    ?- rival(X, Y).
    X = a,
    Y = c ;
    X = b,
    Y = d ;
    X = c,
    Y = a ;
    X = d,
    Y = b ;
    false.

    ?- rival(a, Who).
    Who = c.

    ?- rival(b, Who).
    Who = d.

    ?- rival(c, Who).
    Who = a .

    ?- rival(d, Who).
    Who = b .
    ```

2. 基于情敌关系，描述胜出者 *winner* 。两人互为情敌，且爱慕对象喜欢其中一人。（若爱慕对象同时喜欢两人，则都为胜出者【斜眼）
    ```prolog
    ?- rival(a, b).
    false.

    ?- winner(a, b, Who).
    false.

    ?- rival(a, c).
    true.

    ?- winner(a, c, Who).
    Who = a .
    ```
