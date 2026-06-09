import { useState } from "react"

export default function InputSample(){

    // input 값이 변경되면 input value 속성의 값이 업데이트 되야 함. 
    // useState 관리
    const [text, setText] = useState<string>(''); // 문자타입 초기설정값 빈값

    // e :  event 발생하는 대상의 객체 , target 객체 (element)
    // React.ChangeEvent<대상 element>
    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        // name=key / value=value
        setText(e.target.value);
    }

    return(
        <div className="m-5">
            <input className="border border-gray-300 p-2"
                type="text" 
                name="text" 
                value={text}
                placeholder="text..."
                onChange={onChange} 
            />
            <button className="px-4 py-2 ml-3 bg-blue-500 text-white "
                onClick={()=>setText('')}
            >reset</button>

            <div className="mt-2">값 : {text}</div>

        </div>
    )
}