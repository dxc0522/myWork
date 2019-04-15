// import 'package:flutter/material.dart';

// void main() => runApp(MyApp(
//     // 传参
//     items: new List<String>.generate(1000, (i) => '当前是第 $i 个')));

// class MyApp extends StatelessWidget {
//   // 接收参数
//   // 接受这个参数
//   final List<String> items;
// // 构造函数 接受值 @required为必须有这个值 将参数赋给this.items super重构函数
//   MyApp({Key key, @required this.items}) : super(key: key);
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//         title: 'home Demo',
//         home: Scaffold(
//             appBar: new AppBar(
//               title: new Text('home'),
//             ),
//             body: Center(
//               // 基础样式
//               // child: Text(
//               //   "我的flutter项目我的flutter项目我的flutter项目我的flutter项目我的flutter项目我的flutter项目我的flutter项目我的flutter项目我的flutter项目我的flutter项目",
//               //   textAlign: TextAlign.center,
//               //   maxLines: 2,
//               //   overflow: TextOverflow.fade,
//               //   style: TextStyle(
//               //     fontSize: 20,
//               //     color: Color.fromARGB(255, 255, 125, 125),
//               //     decoration: TextDecoration.underline,
//               //     decorationStyle: TextDecorationStyle.solid,
//               //   ),
//               // )
//               // 布局方式
//               // child: Container(
//               //   child: new Text(
//               //     'hello dou',
//               //     style: TextStyle(
//               //       fontSize: 40,
//               //       color: Colors.white,
//               //     ),
//               //   ),
//               //   alignment: Alignment.topLeft,
//               //   width: 500,
//               //   height: 400,
//               //   padding: const EdgeInsets.fromLTRB(10, 20, 30, 40),
//               //   margin: const EdgeInsets.fromLTRB(10, 20, 30, 40),
//               //   decoration: new BoxDecoration(
//               //       gradient: const LinearGradient(
//               //         colors: [Colors.lightBlue, Colors.greenAccent, Colors.purple],
//               //       ),
//               //       border: Border.all(width: 2, color: Colors.black)),
//               // ),
//               // 图片使用
//               // child: Container(
//               //   child: new Image.network(
//               //     'https://imgsa.baidu.com/forum/w%3D580/sign=d3aefd9670cf3bc7e800cde4e101babd/d2a075f082025aaf10a87f50fbedab64014f1ac1.jpg',
//               //     // fit:BoxFit.cover,//填充方式
//               //     color: Colors.greenAccent,
//               //     colorBlendMode: BlendMode.modulate,//混合模式
//               //     repeat: ImageRepeat.repeatX,//是否平铺，与css一致
//               //   ),
//               //   width: 500,
//               //   height: 400,
//               //   color: Colors.lightBlue,
//               // ),
//               // list使用
//               // child: new ListView(
//               //   children: <Widget>[
//               //     new ListTile(
//               //       leading: new Icon(Icons.home),//图标
//               //       title: new Text('菜单'),//文字
//               //     ),
//               //     new ListTile(
//               //       leading: new Icon(Icons.phone),
//               //       title: new Text('菜单'),
//               //     ),
//               //     new ListTile(
//               //       leading: new Icon(Icons.person),
//               //       title: new Text('菜单'),
//               //     ),
//               //     new Image.network('https://jspang.com/static/upload/20181213/pvA-e9vkrNiXVFUm6xXMO9zf.jpg'),
//               //     new Image.network('https://jspang.com/static/upload/20181213/pvA-e9vkrNiXVFUm6xXMO9zf.jpg'),
//               //     new Image.network('https://jspang.com/static/upload/20181213/pvA-e9vkrNiXVFUm6xXMO9zf.jpg'),
//               //     new Image.network('https://jspang.com/static/upload/20181213/pvA-e9vkrNiXVFUm6xXMO9zf.jpg'),
//               //   ],
//               // ),
//               // list 横向 需要设置宽度
//               // child: MyList(),//引用组件
//               // 动态list
//               child: new ListView.builder(
//                 itemCount: items.length,
//                 itemBuilder: (context, index) {
//                   return new ListTile(
//                     title: new Text('${items[index]}'),
//                   );
//                 },
//               ),
//             )));
//   }
// }

// // list组件拆分
// class MyList extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return ListView(
//       scrollDirection: Axis.horizontal,
//       children: <Widget>[
//         new Container(
//           width: 180,
//           color: Colors.lightBlue[50],
//         ),
//         new Container(
//           width: 180,
//           color: Colors.lightBlue[100],
//         ),
//         new Container(
//           width: 180,
//           color: Colors.lightBlue[200],
//         ),
//         new Container(
//           width: 180,
//           color: Colors.lightBlue[300],
//         ),
//         new Container(
//           width: 180,
//           color: Colors.lightBlue[400],
//         ),
//       ],
//     );
//   }
// }

// 网格

// import 'package:flutter/material.dart';

// void main() => runApp(MyApp());

// class MyApp extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     // 层叠
//     var stack = new Stack(
//       alignment: const FractionalOffset(0.5, 0.8), //层叠的位置
//       children: <Widget>[
//         new CircleAvatar(
//           backgroundImage: new NetworkImage(
//               'http://img5.mtime.cn/mg/2019/03/30/100317.61482119_285X160X4.jpg'),
//           radius: 100,
//         ),
//         // 1 新建容器
//         new Container(
//           decoration: new BoxDecoration(
//             color: Colors.lightBlue,
//           ),
//           padding: EdgeInsets.all(10),
//           child: Text('美呆！新海诚新作"天气之子"曝剧照'),
//         ),
//         // 2 使用position与css类似
//         new Positioned(
//           top: 10,
//           left: 10,
//           child: new Text('左上角'),
//         ),
//         new Positioned(
//           bottom: 10,
//           right: 10,
//           child: new Text('右下角'),
//         ),
//       ],
//     );
//     // 卡片布局
//     var card = new Card(
//       child: Column(
//         children: <Widget>[
//           ListTile(
//             title: Text('河南省漯河市临颍县',
//                 style: TextStyle(fontWeight: FontWeight.bold)),
//             subtitle: Text('窦小草：15736969637'),
//             leading: new Icon(Icons.account_box, color: Colors.lightBlue),
//           ),
//           new Divider(),
//           ListTile(
//             title:
//                 Text('上海宝山区富锦路', style: TextStyle(fontWeight: FontWeight.bold)),
//             subtitle: Text('窦小草：15736969637'),
//             leading: new Icon(Icons.account_box, color: Colors.lightBlue),
//           ),
//           new Divider(),
//           ListTile(
//             title: Text('河南省郑州市金水区',
//                 style: TextStyle(fontWeight: FontWeight.bold)),
//             subtitle: Text('窦小草：15736969637'),
//             leading: new Icon(Icons.account_box, color: Colors.lightBlue),
//           ),
//         ],
//       ),
//     );
//     return MaterialApp(
//         title: 'home',
//         home: Scaffold(
//           appBar: new AppBar(
//             title: new Text('豆豆'),
//           ),
//           // body: GridView.count(
//           //   padding: const EdgeInsets.all(20),
//           //   crossAxisSpacing: 10,
//           //   crossAxisCount: 3,
//           //   children: <Widget>[
//           //     const Text('我是列表'),
//           //     const Text('我是列表'),
//           //     const Text('我是列表'),
//           //     const Text('我是列表'),
//           //     const Text('我是列表'),
//           //   ],
//           // ),
//           // 表格布局
//           // body: GridView(
//           //   gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
//           //     crossAxisCount: 3,//一行几个
//           //     mainAxisSpacing: 4,//间距
//           //     crossAxisSpacing: 4,//间距
//           //     childAspectRatio: 0.7,//宽高比例
//           //   ),
//           //   children: <Widget>[
//           //      new Image.network('http://img5.mtime.cn/mt/2018/10/22/104316.77318635_180X260X4.jpg',fit: BoxFit.cover),
//           //    new Image.network('http://img5.mtime.cn/mt/2018/10/10/112514.30587089_180X260X4.jpg',fit: BoxFit.cover),
//           //    new Image.network('http://img5.mtime.cn/mt/2018/11/13/093605.61422332_180X260X4.jpg',fit: BoxFit.cover),
//           //    new Image.network('http://img5.mtime.cn/mt/2018/11/07/092515.55805319_180X260X4.jpg',fit: BoxFit.cover),
//           //    new Image.network('http://img5.mtime.cn/mt/2018/11/21/090246.16772408_135X190X4.jpg',fit: BoxFit.cover),
//           //    new Image.network('http://img5.mtime.cn/mt/2018/11/17/162028.94879602_135X190X4.jpg',fit: BoxFit.cover),
//           //    new Image.network('http://img5.mtime.cn/mt/2018/11/19/165350.52237320_135X190X4.jpg',fit: BoxFit.cover),
//           //    new Image.network('http://img5.mtime.cn/mt/2018/11/16/115256.24365160_180X260X4.jpg',fit: BoxFit.cover),
//           //    new Image.network('http://img5.mtime.cn/mt/2018/11/20/141608.71613590_135X190X4.jpg',fit: BoxFit.cover),
//           //   ],
//           // )
//           // 横向灵活布局
//           // body: new Row(
//           //   children: <Widget>[
//           //     Expanded(
//           //       //添加该组件会自动充满屏幕灵活的与不灵活的可以混用
//           //       child: new RaisedButton(
//           //         onPressed: () {},
//           //         color: Colors.redAccent,
//           //         child: new Text('红色按钮'),
//           //       ),
//           //     ),
//           //     new RaisedButton(
//           //       onPressed: () {},
//           //       color: Colors.orangeAccent,
//           //       child: new Text('橘色按钮'),
//           //     ),
//           //     new RaisedButton(
//           //       onPressed: () {},
//           //       color: Colors.lightBlue,
//           //       child: new Text('蓝色按钮'),
//           //     ),
//           //   ],
//           // ),
//           // 垂直方向布局
//           // body: Center(
//           //   child: Column(
//           //     crossAxisAlignment: CrossAxisAlignment.center, //副轴对其方式
//           //     mainAxisAlignment: MainAxisAlignment.center,
//           //     children: <Widget>[
//           //       Text('I am dou'),
//           //       Expanded(
//           //         child: Text('My age is 24',),
//           //       ),
//           //       Text('I like you'),
//           //     ],
//           //   ),
//           // )),
//           // 层叠布局
//           // body: Center(
//           //   child: stack,
//           // ),
//           // 卡片布局
//           body: Center(
//             child: card,
//           ),
//         ));
//   }
// }
// 导航页面
// import 'package:flutter/material.dart';
// void main(){
//   runApp(MaterialApp(title: '导航页面',home:new FirstScreen()));
// }
// class FirstScreen extends StatelessWidget{
//   @override
//   Widget build(BuildContext context){
//     return Scaffold(
//       appBar: AppBar(
//         title: Text('导航页面'),
//       ),
//       body: Center(
//         child: RaisedButton(//凸起按钮
//           child: Text('查看详情'),
//           onPressed: (){//按下的事件
//             Navigator.push(context,MaterialPageRoute(//导航组件将下个页面push进去并构建
//               builder: (context)=>new SecondScreen()
//             ));
//           },
//         ),
//       ),
//     );
//   }
// }
// class SecondScreen extends StatelessWidget{
//   @override
//   Widget build(BuildContext context){
//     return Scaffold(
//       appBar: AppBar(title: Text('商品详情页'),),
//       body: Center(
//         child: RaisedButton(
//           child: Text('返回上一页'),
//           onPressed: (){
//             Navigator.pop(context);
//           },
//         ),
//       ),
//     );
//   }
// }
// 导航传参
// import 'package:flutter/material.dart';

// class Product {
//   final String title; //商品标题
//   final String desc; //商品标题
//   Product(this.title, this.desc);
// }

// void main() {
//   runApp(MaterialApp(
//     title: '导航的数据传递和接受',
//     home: ProductList(
//         prodcuts:
//             List.generate(20, (i) => (Product('商品列表 $i', '这是商品详情，编号为：$i')))),
//   ));
// }
// // 父页面传递
// class ProductList extends StatelessWidget {
//   // 接受参数
//   final List<Product> prodcuts;
//   ProductList({Key key, @required this.prodcuts}) : super(key: key);
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         title: Text('商品列表'),
//       ),
//       body: ListView.builder(
//         itemCount: prodcuts.length,
//         itemBuilder: (context, index) {
//           return ListTile(
//             title: Text(
//               prodcuts[index].title,
//             ),
//             onTap: () {
//               Navigator.push(
//                   context,
//                   MaterialPageRoute(
//                       builder: (context) =>
//                           ProductDetail(product: prodcuts[index])));
//             },
//           );
//         },
//       ),
//     );
//   }
// }
// // 详情页接受
// class ProductDetail extends StatelessWidget {
//   final Product product;
//   ProductDetail({Key key, @required this.product}) : super(key: key);
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         title: Text('${product.title}'),
//       ),
//       body: Center(
//         child: Text('${product.desc}'),
//       ),
//     );
//   }
// }
// 子页面返回参数
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    title: '页面跳转返回数据',
    home: FirstPage(),
  ));
}

// new Image.asset('images/qiaoba.jpg')
// 首页
class FirstPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('找美女要电话'),
      ),
      body: Center(
        child: RouterButton(),
      ),
    );
  }
}

// 组件
class RouterButton extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return RaisedButton(
      onPressed: () {
        _navigateToGirls(context);
      },
      child: Text('找美女'),
    );
  }

// 自有方法
  _navigateToGirls(BuildContext context) async {
    // 等待跳转返回
    final result = await Navigator.push(
        context, MaterialPageRoute(builder: (context) => Girls()));
    Scaffold.of(context).showSnackBar(SnackBar(content: Text('$result')));
  }
}

// 子页面
class Girls extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('小姐姐的房间'),
      ),
      body: Center(
        child: Column(
          children: <Widget>[
            RaisedButton(
              child: Text('大长腿妹子'),
              onPressed: () {
                // 返回并创参数
                Navigator.pop(context, '大长腿妹子：154546545121');
              },
            ),
            RaisedButton(
              child: Text('大波妹子'),
              onPressed: () {
                Navigator.pop(context, '大波妹子：1524564564878');
              },
            ),
            RaisedButton(
              child: Text('小萝莉妹子'),
              onPressed: () {
                Navigator.pop(context, '小萝莉妹子：16645648154');
              },
            ),
          ],
        ),
      ),
    );
  }
}

// 本地图片
// import 'package:flutter/material.dart';

// void main() => runApp(MyApp());

// class MyApp extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return Container(
//       child: Image.asset('images/qiaoba.jpg'),
//     );
//   }
// }