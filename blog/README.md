## 路由

| 路径      | 方法 | get  | post                      | login | comment      |
| :-------- | :--- | :--- | :------------------------ | :---- | :----------- |
| /         | GET  |      |                           |       | Home         |
| /register | GET  |      |                           |       | 注册         |
| /register | POST |      | email, nickname, password |       | 处理注册请求 |
| /login    | GET  |      |                           |       | 登陆页面     |
| /login    | POST |      | email, password           |       | 处理登陆请求 |
| /logout   | GET  |      |                           |       | 退出         |