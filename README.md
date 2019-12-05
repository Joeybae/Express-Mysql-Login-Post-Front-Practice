# Express-Mysql-Login-Practice

참고 : https://cheese10yun.github.io/Passport-part1/

--------------------

Passport Login 구현

1. npm init

        # npm init -y

2. 필수모듈 설치

        # npm install cookie-session --save
        # npm install connect-flash --save
        # npm install passport --save
        # npm install passport-local --save

3. app.js 만들기

        var passport = require('passport') //passport module add
          , LocalStrategy = require('passport-local').Strategy;
        var cookieSession = require('cookie-session');
        var flash = require('connect-flash');

        app.use(cookieSession({
          keys: ['node_yun'],
          cookie: {
            maxAge: 1000 * 60 * 60 // 유효기간 1시간
          }
        }));
        app.use(flash());
        app.use(passport.initialize());
        app.use(passport.session());# Express-Mysql-Login-Practice

