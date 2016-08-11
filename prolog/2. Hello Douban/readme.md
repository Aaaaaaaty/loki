# 问题描述

hello douban！

1. 声明 *greet* 规则，使得如下操作成立。（*greet*仅将hello与douban匹配，其余情况均使用hi来打招呼）
    ```prolog
    ?- greet(WayToGreet, douban).
    WayToGreet = hello ;
    false.

    ?- greet(hello, Who).
    Who = douban.

    ?- greet(WayToGreet, alice).
    WayToGreet = hi.

    ?- greet(WayToGreet, bob).
    WayToGreet = hi.

    ?- greet(hi, Who).
    false.
    ```

2. 两个false有何含义？为何最后一次操作未能得到Who的值？如果直接调用`greeet(hi, alice)`会怎样？

3. 尝试用 *trace* 调试上述代码，看看执行过程有何区别。
