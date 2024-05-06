
import { ChevronDownIcon, XIcon } from "@heroicons/react/solid";
import { Dropdown, Menu } from "antd";
import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { PublicationGroup } from "../../../../../types";
import { storageUrl } from "../../../../../constants/apiRequests";
import Icon from "../../../../icons/Icon";
import { getActiveGroupsWithChilds } from "../../../../../utils/requests";
import { useAppContext } from "../../../../../context/appContext";

type Props = {
    selectAction : (node:any) => void;
    selectedType:{value:string},
    typesList: any
}

function mapTreemenu(tree:any, onselect:any) {
    return tree.map((node:any) => {
      
      if (node.children && node.children.length > 0) mapTreemenu(node.children,onselect)
      if(node.icon.src){
        node.iconUrl = `${storageUrl}${node.icon.src}`
        node.icon = 
          <div className={`relative icon-sm`}>
              <ReactSVG src={`${storageUrl}${node.icon.src}`} className='w-full h-full' />
          </div>
          
      }
    
  
      node.key = node.id
      node.value = node.id
        if(node.name_singular){
            node.label = node.name_singular.en
        }else{
            node.label = node.title.en
        }
    if(node.selectable !== false){
        node.onClick = () => onselect(node)

    }
     
    
      return node
    })
  }
const Overlay = ({selectedType, typesList, selectAction}: {selectedType:any, typesList:any, selectAction:any}) => {
    return (

      <div className="relative min-w-[270px]  teddra-whadow " >
      <Menu selectedKeys={selectedType?.value} triggerSubMenuAction='click' mode="vertical" items={mapTreemenu(JSON.parse(JSON.stringify(typesList ? typesList?.filter((type:any) => type.id === 'popular')?.[0]?.children : [])),selectAction)} rootClassName="p-2 rounded menu-filter"   />
    
  </div>
    )
}
export default function TypesDropdown() {
    const [publicationsTypes, setpublicationsTypes] = useState<null | PublicationGroup[]>(null);
    const [loading, setloading] = useState(false);
    const { selectedPubType, setSelectedPubType , disabled} = useAppContext()
    const selectAction = (node:any) => {
        setSelectedPubType({ value: node.id, icon: node.iconUrl, type:'type' })
    }
    useEffect(() => {
        (async() => {
            setloading(true)
            if(!publicationsTypes || publicationsTypes?.length === 0){
                console.log('ex')
                const data = await fetch(getActiveGroupsWithChilds).then(res => res.json())
                setpublicationsTypes(data.data)
            }
            setloading(false)
        })()
    }, []) 

  return (
    <Dropdown
    overlay={<Overlay selectAction={selectAction} selectedType={selectedPubType} typesList={publicationsTypes ? publicationsTypes : []} />}
    trigger={['click']}
    disabled={loading || disabled.filter}
    >
       
        <button className="flex space-x-2 items-center px-4 py-1.5 rounded border border-main disabled:bg-skin-fill-muted disabled:cursor-not-allowed" disabled={loading || disabled.filter}>
                {selectedPubType?.value ? <ReactSVG  beforeInjection={(svg) => {
        svg.setAttribute('style', 'width: 100%; height:100%; fill:inherit ')
      }} className="icon-sm" src={selectedPubType.icon}/> : <Icon className='icon-sm' name="FilterIcon"/>}
                <p>Filter</p>
                {selectedPubType?.value ? <button onClick={() => setSelectedPubType({value: '', type:'type', icon: ''})}><XIcon className="icon-mini"/></button> : <ChevronDownIcon className="icon-sm"/>}
            </button> 
                                                        
        
    </Dropdown>
 
  )
}

