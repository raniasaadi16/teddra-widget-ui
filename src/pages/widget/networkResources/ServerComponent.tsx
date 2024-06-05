

type Props = {
    title: string,
    icon:JSX.Element,
    onSelect: any,
    active?:boolean,
}
export default function ServerComponent({title, icon, onSelect,active} :Props) {

    return (
   
        <button className={`${active ? 'bg-skin-fill-inverted fill-skin-inverted text-skin-inverted' : 'bg-hover-transparent'} relative group  w-[100px]  p-3 rounded h-max`} 
     
        >
              
                <div className={` relative  `}
                    onClick={onSelect} 
                    >
                    <div className='relative w-[40px] h-[40px] flex justify-end z-20 mx-auto '>
                    
                        {icon}
                    </div>
                    
                        <p className=" text-center ">{title}</p>
                    

                </div>
        </button>
     
  )
}
