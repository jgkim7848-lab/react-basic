import mysql from 'mysql2/promise'
// .env.local 호출해서 사용 => 자동으로 호출
// process.env.변수명  => 호출

const db = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port:Number(process.env.MYSQL_PORT),
    database:process.env.MYSQL_DATABASE,
    connectionLimit:10,
    waitForConnections: true
})

export default db;

// waitForConnections
// 연결이 없고, 제한에 도달했을 때 풀의 동작을 결정
// true : 풀의 연결 요청을 대기열에 넣고 사용 가능해지면 호출 (default)
// false : 즉시 오류와 함께 다시 호출