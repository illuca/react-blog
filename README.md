## Project Structure

```shell
$project
├── README.md
├── admin
├── blog
└── service
```

## How to run

First create database 'react-blog' using mysql:

```sql
create table admin_user
(
    username varchar(50) null,
    password varchar(50) null,
    id       int auto_increment
        primary key
);

create table type
(
    id        int auto_increment
        primary key,
    type_name varchar(50) null,
    `order`   int         null
);

create table article
(
    id           int auto_increment
        primary key,
    type_id      int          not null,
    title        varchar(100) null,
    content      text         null,
    introduction text         null,
    create_time  datetime     null,
    view_count   int          null,
    constraint article_type_null_fk
        foreign key (type_id) references type (id)
)
```



```shell
cd $project/service
npm install
npm run start

cd $project/admin
npm install
npm run start

cd $project/blog
npm install
npm run start
```



## Features

### back end management

list articles:

![image-20240522234326473](https://p.ipic.vip/2oqu9n.png)

add article:

![image-20240522234351982](https://p.ipic.vip/9epm7p.png)

### User page

home page list:

![image-20240522235003255](https://p.ipic.vip/f11yw2.png)

markdown display:

![image-20240522234914380](https://p.ipic.vip/bd9w7f.png)