## 路由设计

| 请求方法 | 请求路径         | get 参数 | post 参数               | 功能             |
| :------- | :--------------- | :------- | :---------------------- | :--------------- |
| GET      | /students        |          |                         | 渲染学生页面     |
| GET      | /students/new    |          |                         | 渲染新建学生页面 |
| POST     | /students/new    |          | name,age,gender,hobbies | 处理新建学生请求 |
| GET      | /students/edit   | id       |                         | 渲染修改学生页面 |
| GET      | /students/edit   |          | name,age,gender,hobbies | 处理修改学生页面 |
| GET      | /students/delete | id       |                         | 删除学生         |
