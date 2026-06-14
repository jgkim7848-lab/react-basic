
export default function Start(){

    // 내부 변수 사용
    const name = "홍길동";

    // 스타일 객체 선언
    const style ={
        fontSize: '20px',
        color: 'white',
        backgroundColor:'black'
    }

    return(
        <div>
            <h2 style={style}>Start.tsx area  {name} Hello~!!!</h2> 
        </div>
    )
}