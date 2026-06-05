function HelloProps(props){
    // props == properties
    // 컴포넌트에게 전달해줘야 하는 값이 있을 때 사용
    // 파라미터로 전달 받음. (여러개 받을 수 있음, 형식도 상관없음)

    // props => object 
    // 내 컴포넌트를 호출하는 곳에서 name="value"
    // props.name => 받아서 씀.

    return(
        <div>
           {props.name} / {props.age} HelloProps.jsx Area
        </div>
    )
}

export default HelloProps;