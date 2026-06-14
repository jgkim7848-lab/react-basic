import { useRef, useState } from "react";
type inputsType = {
    id:string,
    nick:string
}

export default function InputSample2(){

    // 기본 초기 값에서 타입을 확인할 수 있다면 (구조를 확인할 수 있다면...)
    // 추론타입을 사용할 수 있음.

    // 타입을 꼭 명시해야 하는 경우
    // 1. 초기값 null인 경우 (상태를 확인할 수 없는 경우)
    //const[inputs, setInputs] = useState<inputsType | null>(null);
    // 2. 빈 배열인 경우 (배열안의 구조를 확인할 수 없는 경우)
    // 3. 복잡한 객체인 경우

    const [inputs, setInputs] = useState<inputsType>({
        id:'',
        nick:''
    });

    const {id, nick} = inputs;

    const onChange= (e: React.ChangeEvent<HTMLInputElement>)=>{
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        })
    }

    const idInput = useRef<HTMLInputElement | null>(null);

    const onReset = ()=>{
        setInputs({
            id:'',
            nick:''
        })

        // ? 옵셔널 체이닝 (optional chaining)
        // 해당 객체가 없을 때 에러 없이 안전하게 접근 할 수 있음. 
        idInput.current?.focus();
    }



    return(
        <div className="p-4">
            <input className="border border-gray-300 p-2 mr-2"
                type="text" 
                name="id" 
                value={id}
                placeholder="ID..." 
                onChange={onChange}
                ref={idInput}
            />
            <input className="border border-gray-300 p-2"
                type="text" 
                name="nick" 
                value={nick}
                placeholder="NickName..." 
                onChange={onChange}
            />
            <button className="px-4 py-2 ml-3 bg-blue-500 text-white hover:bg-blue-700"
                onClick={onReset}
            > reset </button>
                <div className="mt-2"> 값: {id} / {nick} </div>
        </div>
    )
}