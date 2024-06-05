import Input from "."

export const Search = (props : React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <Input className="w-[200px] border-x border-main focus:placeholder:opacity-0 " {...props}/>

    )
}