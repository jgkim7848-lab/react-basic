import { useRef, useState } from "react";

function InputSample2() {
    //input 값이 여러개일 경우
    //하나의 object를 사용하여 key:value로 관리함.

    const [inputs, setInputs] = useState({
        //{}안에서 사용할 이름을 key:value 형태로 초기화 하는거임
        id: '',
        nick: ''
    });

    const { id, nick } = inputs; //이 줄이랑 밑에 value={id}의 관계????

    const onChange = (e) => {
        //input이 id도 바꾸고 하니까 같이 움직일거임
        console.log(e.target);
        //name=>key, value=>value

        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value //name키를 가지는 value값 지정
        })

        //setInputs => {id:1234}
        //객체로 usestate를 구성할경우 하나의 값이 변경되면 다른값이 사라지는 현상이 발생함.
        //따라서 미리 생성해놓은 값들을 복사해둬야함. 그래야 없어지는걸 막을수있다.
        //setinputs 안에서 미리 복사를 때릴거임
         

    }


    const idInput = useRef();

    const onClick=()=>{
        setInputs({
            id:'',
            nick:''
        })
        //id위치로 focus 이동
        //useRef()   특정DOM을 선택해야 하는 상황에 getelementby** / querySelector
        idInput.current.focus();
    }

    return (
        <div>
            <input type="text" name="id" value={id} placeholder="ID..." onChange={onChange} ref={idInput}/>
            <input type="text" name="nick" value={nick} placeholder="NICK..." onChange={onChange} />
            <button onClick={onClick}>초기화</button>
            <div>ID(nick) : {id}{(nick)}</div>
        </div>
    )


}

export default InputSample2;