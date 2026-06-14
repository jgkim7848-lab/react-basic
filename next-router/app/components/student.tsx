interface studentType{
    id: number;
    name: string;
    age: number;
    address: string;
    phone: string;
}

type stdProps = {
    std : studentType;
}

export default function Student({std}: stdProps){
    return(
        <div className="flex justify-center m-2">
            <b>{std.name}({std.age})</b> / {std.phone} ({std.address})
        </div>
    )
}