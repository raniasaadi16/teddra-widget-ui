

type Props = {
    title: string,
    icon:JSX.Element,
    description:string | JSX.Element,
    onSelect: any,

}
export default function ObjectMd({title, icon, description, onSelect} :Props) {

    return (
   
        <button className={`relative group w-[180px] bg-hover-transparent  hover-lg`} 
     
        >
              
                <div className='flex relative  ' 
                    onClick={onSelect} 
                    >
                    <div className='relative icon-md flex justify-end z-20 '>
                    
                        {icon}
                    </div>
                    
                    <div className='ml-3 flex-1 text-start -mt-[2px]'>
                        <p className="text-title">{title}</p>
                        <p className={` break-words ellipsis-desc font-light text-muted`}>{description}</p>
                    </div>

                </div>
        </button>
     
  )
}
