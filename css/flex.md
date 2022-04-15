# Flex 


## 概念

- 主轴
- 交叉轴
- 容器
- 元素


## 容器api
- **flex-drection** 主轴方向 (**row| column |row-reverse |column-reverse)**
- **flex-wrap** 是否换行(**wrap| nowrap |wrap-reverse**)
- **align-items**(**flex-start | flex-end |center |strech | baseline**) 交叉轴方向元素调整
- **justify-content**(**flex-start| flex-end flex |space-around |space-between| center**)  主轴方向调整
- **align-content**(**flex-start | flex-end |space-around | space-between | strech | center**) 多根轴线的对齐方式
- **flex-flow** 分别是direction | wrap


## 元素api

- *flex-shrink* (默认值 1)
- *flex-grow* (默认值0)
- *order* 默认值0 （越小越前）
- *flex basis* 再分配多余空间之前，项目占据的主轴空间（可以设置为 350px)
- *flex*  flex-grow flex-shrink flex-basis 的简写 默认值为0 1 auto（快捷值1 1 auto) 占据的剩余空间比其他多一倍 none 少一倍
- *align-self* 允许单个项目与其他项目有不一样的对其方式，默认值为auto，默认继承父元素align-items 的值 如果没有父元素，则等同于stretch

  


