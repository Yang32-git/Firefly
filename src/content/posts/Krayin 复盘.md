---
title: "# Krayin 复盘"
published: 2026-08-30
---
# Krayin 复盘

信息收集;

![kali](https://tu.yangnb.online/file/1788084521069_image.png)

开放 22，80，8080 端口

Web：

![kali2](https://tu.yangnb.online/file/1788084569524_image.png)

有一个 cms，搜索 github 仓库： [https://github.com/krayin/laravel-crm](https://github.com/krayin/laravel-crm)

![kali3](https://tu.yangnb.online/file/1788085140934_image.png)

用默认密码登录，然后把 cookie 复制下来。

找 cms 的 exp

将 exp 找到并修改，安照 exp 先建一个 shell.php 文 件并上传

![kail4](https://tu.yangnb.online/file/1788085182894_image.png)

测试成功，进行反弹 shell

# 提权；

系统中有两个用户 krayin tonglinggejim0

运行 [linpeas.sh](http://linpeas.sh)（这里我遇到了一个报错

> linpeas.sh: line 100: syntax error near unexpected token `$‘in\r’’

> 'inpeas.sh: line 100: ` case “$opt” in

这里问 AI 然后改了一下就脚本好了）

发现有一个 MySQL 服务

- MySQL (MariaDB) 运行在 localhost:3306
- 用户名: krayin, 密码: root123

用这个来登录 krayin

拿到 krayin，测试 sudo -l 没有权限，翻翻找找没有 东西了，就用先前得到的密码组成字典爆破密码

爆破 root，tonglinggejim0。

最后得到 root 密码是 root123 tonglinggejim0 密码是 web 密码 admin123

得到 root 的 shell

> Flag;flag{root-ac0abf8a8a25305c77f1ff1130ee82ab}

> flag{user-5fd188d185e87bdc34fc0c1389d35409}

