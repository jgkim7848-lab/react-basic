function Student({std}){
    const {name, age, address, phone} = std;
    return(
        <div>
            <h3>
                <b>{name}({age})</b><span>{phone}({address})</span>
            </h3>
        </div>
    )
}

export default Student;