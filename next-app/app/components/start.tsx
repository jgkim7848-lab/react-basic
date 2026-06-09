

// 2번째 컴포넌트 파일
export default function Start(){
    const name = "김용찬";
    const style ={
        fontSize: '20px',
        color: 'white',
        backgroundColor: 'black'
    }
    return (
        <div>
            <h2 style={style}>Start.tsx area {name} Hello~!!!</h2>
        </div>
    )
}