---
index: 1
title: 一次Centos7下简单的Mysql安装记录
# 设置作者
author: 余月七
# 设置写作时间
date: 2022-03-18
# 一个页面可以有多个分类
category:
- Linux
# 一个页面可以有多个标签
tag:
- centos7
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在首页的文章板块中
star: true
# 你可以自定义页脚
footer: This website is served by GitHub Pages
copyright: false
lastUpdated: true
contributors: true
---


## 前言

由于网上安装Mysql的方式有很多种，但有些方式并未安装成功，比如用Yum源，还待后续查看具体是哪一步出了问题

---

## 以rpm包的形式安装Mysql

### 第一步：yum install wget -y		

//安装wget工具

---

### 第二步: 以tar包形式拉取下载并进行解压

1.用wget拉取下载：

wget http://dev.mysql.com/get/Downloads/MySQL-5.7/mysql-5.7.12-1.el6.x86_64.rpm-bundle.tar

2.进行解压（个人是解压在/usr/local/src/mysql目录下）：

tar -xvf mysql-5.7.12-1.el6.x86_64.rpm-bundle.tar

图片参考：

![](https://unleashed.oss-cn-beijing.aliyuncs.com/picgo/2031154-20201102223925339-1063831368.png)

---

### 第三步：安装

注意：在结尾加上 --nodeps --force  该字段，该功能为取消依赖安装。且按以下顺序安装！！

1.rpm -ivh mysql-community-common-5.7.12-1.el6.x86_64.rpm --nodeps --force

2.rpm -ivh mysql-community-libs-5.7.12-1.el6.x86_64.rpm --nodeps --force

3.rpm -ivh mysql-community-client-5.7.12-1.el6.x86_64.rpm --nodeps --force

4.rpm -ivh mysql-community-server-5.7.12-1.el6.x86_64.rpm --nodeps –force

---

### 第四步：启动mysql服务，并且查看服务状态

1.启动：systemctl start mysqld

2.查看状态：systemctl status mysqld

3.成功之后：图片参考

![](https://unleashed.oss-cn-beijing.aliyuncs.com/picgo/2031154-20201102223948449-1163660151.png)

---

### 第五步：查看Mysql默认密码

1.查看Mysql日志

grep 'temporary password' /var/log/mysqld.log

2.图片参考

![](https://unleashed.oss-cn-beijing.aliyuncs.com/picgo/2031154-20201102224009180-497761200.png)

---

### 第六步：修改默认密码

1.修改密码sql语句（修改用户名为‘root‘的密码为’123456‘）

ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';

2.假如修改失败，出现如下提示信息“ERROR 1819 (HY000): Your password does not satisfy the current policy requirements”，请继续以下两条sql语句，如果修改成功可忽略以下两条sql语句

2.1设置 validate_password_policy 的全局参数为 LOW  :  set global validate_password_policy=LOW;

2.2 设置全局参数为 6 ： set global validate_password_length=6;

2.3 重新更改 ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';

---

### 第七步：登录Mysql 

### 最后:学会查看错误日志

由于个人原因，在第二次查看mysql服务和启动服务时，出现错误提示。特此记录!

1.查看错误日志：cat  /var/log/mysqld.log

2.如出现图中错误可以采用以下方式解决

![](https://unleashed.oss-cn-beijing.aliyuncs.com/picgo/2031154-20201102224026603-715614475.png)


2.1  mkdir -p /var/run/mysqld

2.2  chown mysql.mysql /var/run/mysqld

2.3 最后，重启mysql服务

3.虽然服务启动成功了，但是当连接mysql时又出现一个错误，如下图

![](https://unleashed.oss-cn-beijing.aliyuncs.com/picgo/2031154-20201103082828484-619563504.png)


3.1 先查询自己的mysql.sock:  find / -name mysql.sock  (个人参考图) 

![](https://unleashed.oss-cn-beijing.aliyuncs.com/picgo/2031154-20201103083424017-129992276.png)

3.2 然后在 my.cnf 中添加指定 mysql.sock文件 ，在最后一行加入以下内容。（该路径为个人路径）
`[mysql]`
`no-auto-rehash`
`socket = /var/lib/mysql/mysql.sock`

![](https://unleashed.oss-cn-beijing.aliyuncs.com/picgo/2031154-20201103083618108-558073854.png)

---

4.总结：如果未出现图中错误，要学会查看错误日志并且解决它！！并且要注意每个人遇到的问题不一样，一定先要冷静下来仔细分析错误，然后再寻找解决问题的方案。