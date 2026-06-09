// type, interface
interface HelloPropsType {
    name: string;
    age : number;
}

export default function HelloProps({name, age}:HelloPropsType){
    return(
        <div>
            HelloProps.tsx area props / {name} ({age})
        </div>
    )
}