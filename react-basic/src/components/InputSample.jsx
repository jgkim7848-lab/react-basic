import { useState } from "react";

function InputSample(){

    // input value 값을 변수로 관리
    // useState로 관리
    const [ text, setText ] = useState(''); // 문자의 초기값은 공백

    // input 에서 글자가 저장되는 과정
    // input에 값이 (쓰이거나, 삭제되거나) 변화가 될 때마다 text의 변수가 변경되는 함수
    // onChange => 값이 상태변경을 하게 될 때 실행.

    // const onChange = (e)=>{
    //     // input 값이 변경될 때마다 호출
    //     // e.target.value
    //     console.log(e.target.value);
    //     console.log(e.target.name);
    //     setText(e.target.value);
    // }

    const onClick = ()=>{
        setText('');
    }

    return(
        <div>
            <input 
                type="text" 
                name="text" 
                value={text} 
                onChange={(e)=>{setText(e.target.value)}} 
            />
            <div>
                <b>값: {text} </b>
            </div>

            <button onClick={onClick}>초기화</button>
        </div>
    )
}

export default InputSample;