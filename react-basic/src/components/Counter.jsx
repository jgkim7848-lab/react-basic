function Counter() {
    const [number, setNumber] = useState(0);



    const onIncres = () =>{
        if(number >=10){
            setNumber(9);
        }
setNumber(number+1);

        }

    const ondecres = () =>{
        setNumber(n => n+1);
        //함수형 업데이트
setNumber(number-1);
    }


    return (
        <div>
            <h1>0</h1>
            <button onClick={onIncres}>+</button>
            <button onClick={ondecres}>-</button>


        </div>
    )
}
export default Counter;