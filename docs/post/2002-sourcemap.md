---
title: 2002-SourceMap原理解析
date: 2020-02-16 19:24:53
---



# source map 的原理探究

在现在的前端开发中，最终部署上线的是使用压缩的代码。压缩的代码，可以减少文件的体积，加快页面的打开速度。 但是对于开发人员的调试就是一个噩梦了。

因此出现了 SourceMap 映射文件，再压缩代码的时候，生成对应的映射文件。 

**压缩代码 + 映射文件 = 源码（可以还原出源码）**





## 总结

简单理解：**把源码 和 输出文件（压缩的代码）的映射关系记录下来。**



举个例子：

> “feel the force” （源码） ⇒ Yoda ⇒ “the force feel” （输出的代码）

| Output location   | Input          | Input location    | Character |
| :---------------- | :------------- | :---------------- | :-------- |
| Line 1, Column 0  | Yoda_input.txt | Line 1, Column 5  | t         |
| Line 1, Column 1  | Yoda_input.txt | Line 1, Column 6  | h         |
| Line 1, Column 2  | Yoda_input.txt | Line 1, Column 7  | e         |
| Line 1, Column 4  | Yoda_input.txt | Line 1, Column 9  | f         |
| Line 1, Column 5  | Yoda_input.txt | Line 1, Column 10 | o         |
| Line 1, Column 6  | Yoda_input.txt | Line 1, Column 11 | r         |
| Line 1, Column 7  | Yoda_input.txt | Line 1, Column 12 | c         |
| Line 1, Column 8  | Yoda_input.txt | Line 1, Column 13 | e         |
| Line 1, Column 10 | Yoda_input.txt | Line 1, Column 0  | f         |
| Line 1, Column 11 | Yoda_input.txt | Line 1, Column 1  | e         |
| Line 1, Column 12 | Yoda_input.txt | Line 1, Column 2  | e         |
| Line 1, Column 13 | Yoda_input.txt | Line 1, Column 3  | l         |



得出来的映射关系类似下面这样，通过这个映射关系，就可以得出源代码。

```js
Mappings (283 chars length): 1|0|Yoda_input.txt|1|5, 1|1|Yoda_input.txt|1|6, 1|2|Yoda_input.txt|1|7, 1|4|Yoda_input.txt|1|9, 1|5|Yoda_input.txt|1|10, 1|6|Yoda_input.txt|1|11, 1|7|Yoda_input.txt|1|12, 1|8|Yoda_input.txt|1|13, 1|10|Yoda_input.txt|1|0, 1|11|Yoda_input.txt|1|1, 1|12|Yoda_input.txt|1|2, 1|13|Yoda_input.txt|1|3
```



原理是这样，剩下的**就是对这个映射关系做优化**。不然就上面一行字符串，映射关系都这么复杂的话，要是代码复杂的话，那生成的映射关系得多大？



## SourceMap 生成步骤？

把上面的映射关系经过以下步骤优化，最终得出我们生产环境用的 SourceMap。

1. **省去输出文件中的行号**

   输出的文件，经过压缩，行号都是1，因此映射关系中的 1，就可以去掉

2. **可符号化字符的提取**

   上面的例子，记录的是每一个字符。 但是压缩代码并不会对代码中的单词也压缩掉，因此可以把每一个字符，换成字符串。 比如 `feel，the， force`。 这样就可以省下很多映射关系。

3. **记录相对位置**

   如果代码很多的话，那么列数可能很多位（eg:50000+）, 这样记录映射关系中很多一部分都是这些数字，占用很多空间。 因为映射关系式有顺序的，因此使用相对位置的话，就会节省很多空间。

   eg: 1|4|10 => 1|3|6    （1 | 1+3 | 1+3+6 ）

4. **VLQ（Variable Length Quantities）优化 **

   用 VLQ 的方式记录相对位置，再转换成二进制表示。

5. **Base64 转换**

   把二进制变成 base64的值，节省空间。比如 000001变成对应字母。



具体的信息，可以看下面的参考文章，讲的很清楚了，这里就不再讲一遍了。





## 参考文章

1. [《source map 的原理探究》](https://www.cnblogs.com/Wayou/p/understanding_frontend_source_map.html)
2. [《Source Maps under the hood – VLQ, Base64 and Yoda》](https://docs.microsoft.com/zh-cn/archive/blogs/davidni/source-maps-under-the-hood-vlq-base64-and-yoda)



> 这两个是同一个文章，只是一个是英文版，一个是汉化版

