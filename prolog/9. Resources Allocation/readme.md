# 问题描述

模拟线上服务资源对针对 App 的分配。


1. 节点和应用数据可以如下抽象:

    ```prolog
    node(dbae1, info(cpu(80000), memory(8169760))).
    node(code, info(cpu(140000), memory(16295788))).
    node(diggle1, info(cpu(160000), memory(65963456))).
    node(dis1, info(cpu(240000), memory(49382240))).

    app(frodo_web_default, info(cpu(657), memory(535200))).
    app(frodo_web_im, info(cpu(122), memory(4560200))).
    app(group_web_default, info(cpu(379), memory(3523200))).
    app(group_web_api, info(cpu(264), memory(1773200))).
    ```

2. 可以封装成如下的形式，表示针对所给定的节点，将两个 App 的 Instance 分别分配 300 和 500 个 Worker，仅考虑 CPU 使用情况。
使用逻辑语言自动生成分配方案。SWI-Prolog 提供的 CLP/FD 库可能需要被用到: http://www.swi-prolog.org/pldoc/doc/swi/library/clp/clpfd.pl 。

    ```prolog
    ?- solve([dbae1, diggle1], [[frodo_web_default, 300], [group_web_default, 500]], X).
    X = [[[frodo_web_default, 57, 657*57], [group_web_default, 78, 379*78]], [[frodo_web_default, 243, 657*243], [group_web_default, 422, 379*422]]]
    ```

3. 考虑加入多个因素(内存，带宽) 后的情况。
