# Express-Mysql-Login-Practice

참고 : https://codeshack.io/basic-login-system-nodejs-express-mysql/

Screenshot
-------------------------------

<img width="534" alt="스크린샷 2019-12-06 오후 4 55 46" src="https://user-images.githubusercontent.com/45925992/70306290-d432ce00-1849-11ea-8e40-9834d91d006b.png">


------------------------------

# mysql 설치 및 실행방법

1. mysql 설치

  - Mac 버전
  
        # brew install mysql

  - 일반 설치
  
        https://dev.mysql.com/downloads/mysql/ 맞는 버전 다운로드 후 설치

2. mysql 환경변수 

  - 경로 변경
  
        # cd /usr/local/mysql/etc
        # sudo vi profile

  - profile 파일에 경로 추가
  
        # profile 맨 하단으로 이동하여 i를 누른후 아래의 2가지 경로를 복사하여 붙여넣는다.
        # export DB_HOME=/usr/local/mysql
        # export PATH="$PATH:/usr/local/mysql/bin"
        # 그 후 esc를 누른 후 :wq를 누른다. 만약, 에러 발생 시 :w!를 입력하고, :q를 눌러서 profile에서 나온다.
        
  - 설정 적용 (위와 같은 경로)
  
        # source /etc/profile 

3. mysql 실행

  - mysql 실행
  
        # mysql.server start
  
  - mysql 종료
  
        # mysql.server stop
  
  - mysql 접속
  
        # mysql -u root -h localhost -p
        # 비밀번호를 설정 안하셧다면 root를 입력하면 되고, 설정 시 비밀번호를 입력하고 접속하면 된다.
        # 접속에 성공하면 'mysql>' 이라고 표시되는것을 볼 수 있다.

4. mysql 데이터베이스 확인 및 만들기

  - databases 확인
  
        # SHOW DATABASES;
  
  - 결과
  
        +--------------------+
        | Database           |
        +--------------------+
        | information_schema |
        | mysql              |
        | performance_schema |
        | sys                |
        +--------------------+

  - database 만들기 (database 명 : nodelogin)
  
        # CCREATE DATABASE IF NOT EXISTS `nodelogin` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
  
  - database 선택
  
        # USE nodelogin;

  - Table 만들기
  
        CREATE TABLE IF NOT EXISTS `accounts` (
          `id` int(11) NOT NULL,
          `username` varchar(50) NOT NULL,
          `password` varchar(255) NOT NULL,
          `email` varchar(100) NOT NULL
        ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

  - 결과
  
        mysql> describe accounts;
        +----------+--------------+------+-----+---------+----------------+
        | Field    | Type         | Null | Key | Default | Extra          |
        +----------+--------------+------+-----+---------+----------------+
        | id       | int(11)      | NO   |     | NULL    |                |
        | username | varchar(50)  | NO   |     | NULL    |                |
        | password | varchar(255) | NO   |     | NULL    |                |
        | email    | varchar(100) | NO   |     | NULL    |                |
        +----------+--------------+------+-----+---------+----------------+
        4 rows in set (0.00 sec)
        
  - Test 계정 만들기
  
        # INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES (1, 'test', 'test', 'test@test.com');

  - 결과
  
        mysql> select * from accounts;
        +----+----------+----------+---------------+
        | id | username | password | email         |
        +----+----------+----------+---------------+
        |  1 | test     | test     | test@test.com |
        +----+----------+----------+---------------+
        1 row in set (0.00 sec)

  - Primary Key 설정
  
        # ALTER TABLE `accounts` ADD PRIMARY KEY (`id`);

  - ID가 자동으로 증가하도록 설정
  
        # ALTER TABLE `accounts` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;

  - 결과
  
        mysql> describe accounts;
        +----------+--------------+------+-----+---------+----------------+
        | Field    | Type         | Null | Key | Default | Extra          |
        +----------+--------------+------+-----+---------+----------------+
        | id       | int(11)      | NO   | PRI | NULL    | auto_increment |
        | username | varchar(50)  | NO   |     | NULL    |                |
        | password | varchar(255) | NO   |     | NULL    |                |
        | email    | varchar(100) | NO   |     | NULL    |                |
        +----------+--------------+------+-----+---------+----------------+
        4 rows in set (0.00 sec)

# 실행방법

1. Express-Mysql-Login-Practice 다운로드

2. Express-Mysql-Login-Practice 폴더로 이동

3. npm install

4. node login.js
