# 使用说明

#### 1. 请先安装 tinify 的依赖库：

```python
python -m pip install tinify
```

#### 2. 申请 tinify key

到 [https://tinypng.com/developers](https://tinypng.com/developers) 申请自己的 key，每个 key 每个月可以压缩 500 个文件。

#### 3. 执行脚本

申请完 key 之后，更新到代码段中的：
```python
tinify.key = "your key" # AppKey
```

然后带参数执行脚本即可。

```
[Usage] compress-with-tinypng.py [filepath]
```

带的第一个参数是必选的，可以是文件，也可以是文件夹。

第二个参数是可选的，自定义 key，如果输入了第三个参数，则优先使用自定义 key

压缩后的文件，默认输出到当前脚本所在目录下的 tinypng 文件夹中，如果要输出到其他位置，可以自行修改脚本实现。

执行方式   python compress-with-tinypng.py [文件名或者文件夹名]

修改图片覆盖原数据的修改

把代码中的这一句  
output_path = os.path.join（get_file_dir（input_file），'tinypng'）
改成  
output_path = get_file_dir（input_file）就行了
