function HelloProps2({name, age}){

    // 구조분해 props (name/age)
    //const {name, age} = props;

    return(
        <div>
            HelloProps2.jsx Area props = {name} / {age}
        </div>
    )
}

export default HelloProps2;

// StartProps   name, phone =>  홍길동님 전화번호는 1111입니다.