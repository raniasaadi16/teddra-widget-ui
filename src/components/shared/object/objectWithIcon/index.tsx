

type Props = {
    title: string,
    icon:JSX.Element,
    description?:string | JSX.Element,
    onSelect: any,
    width?:string,
    active?:boolean,
    extra?:JSX.Element
}
export default function ObjectWithIcon({title, icon, description, onSelect, width,active, extra} :Props) {

    return (
   
        <button className={`${active ? 'bg-skin-fill-inverted fill-skin-inverted text-skin-inverted' : 'bg-hover-transparent'} relative group ${width ? width : 'w-[280px]'}  p-3 rounded h-max`} 
     
        >
                {extra && extra}
              
                <div className={`flex relative ${!description && 'items-center'} `}
                    onClick={onSelect} 
                    >
                    <div className='relative w-[40px] h-[40px] flex justify-end z-20 mt-[4px] '>
                    
                        {icon}
                    </div>
                    
                    <div className='ml-3 flex-1 text-start'>
                        <p className="  truncate max-w-[190px] font-bold">{title}</p>
                        {description && (
                            <p className={` max-w-[190px]  ${active ? 'text-skin-inverted' : 'text-muted'} text-small`}>{description}</p>

                        )}
                    </div>

                </div>
        </button>
     
  )
}
