# 贪吃蛇

[在线地址](https://qytayh.github.io/Snake-eating/index.html)

## 模块划分

### Map 地图类
    - clearData 清空数据
    - setData 设置数据
    - include 该坐标是否包含数据
    - render 将数据渲染在地图元素上

### Food 食物类
    - create 创建食物

### Snake 蛇类 
    - move 移动蛇
    - eatFood 吃食物

### Game 游戏类 - 控制器
    - start 开始游戏
    - stop 暂停游戏
    - isOver 判断是否结束
    - control 游戏控制器

## 总结
- 单一原则
- 低耦合、高内聚
