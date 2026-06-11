import mysql from 'mysql2/promise'
//왜 여기에 /promise가 붙어야 api/board/route.ts에서 const[rows]에 오류가 안생기는지 이유를 모르겠도르.

import { connection } from 'next/server'
//.env.local 파일을 자동으로 호출되개할거임,
//process.env.변수명 하면 호출됨

const db = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: Number(process.env.MYSQL_PORT),
    database: process.env.MYSQL_DATABASE,
    //이거 5갠,ㄴ 필수로 있어야 하는 정보임.

    connectionLimit:10,
    waitForConnections: true
    //이 옵션은 연결이 없고 제한에 도달 했을때 풀의 동작을 결정함.
    //true - 풀의 연결 요청을 대기열에 넣고 사용 가능해지면 호출
    //false - 즉시 오류와 함께 재호출
    //대체론 true가 디폴트값임.

})

export default db;
