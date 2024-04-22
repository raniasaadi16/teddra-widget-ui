import Input from "."

export const Search = (props : React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <Input className="w-[200px] rounded border border-main " {...props}/>

    )
}