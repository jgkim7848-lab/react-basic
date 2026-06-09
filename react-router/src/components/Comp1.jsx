import {student, students} from "../data/data"
import Student from "./Student";
function Comp1(){


    


    return(
        <div className="comp comp1">
            <h2>Comp1.jsx Area</h2>
            {/* <h3>{student.name}({student.age} / {student.phone} = {student.address})</h3> */}
        
            <Student std={student}>
                {students.map((s,i) => <Student std={s} key={i} />)}
            </Student>
        
        
        </div>
    )
}

export default Comp1;