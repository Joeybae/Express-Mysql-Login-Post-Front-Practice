# Express-Mysql-Login-Practice

참고 : https://cheese10yun.github.io/passport-mysql/

--------------------

1. 필수모듈 설치

        # npm install jquery-validation --save
        # npm install bcrypt --save

2. API 라우터 설정

  - app.js
  
        var api = require('./routes/api');

        app.use(express.static(path.join(__dirname, 'node_modules')));

        app.use('/api/v1', api);
