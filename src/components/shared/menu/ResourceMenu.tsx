
import DropDownMenu from '.'
import Icon from '../../icons/Icon'

type Props = {
  items: {
    open?:{action:() => void}, 
    shortcut?:boolean,
   
  }
}


export default function ResourceMenu({items}:Props) {

  



   
  return (
    <div className="min-w-[200px]">
        <DropDownMenu
          selectedKeys={[]}
          items={[
            
          ...items.open ? [{
              label:'Open in new tab',
              icon:<Icon name='OpenWindow' className="icon-mini" />,
              key:'open',
              onClick:items.open.action
            }]: [],
            {
              label:'Pin',
              icon:<Icon name={'Pin'} className="icon-mini" />,
              key:'pin',
              disabled:true,
              onClick:() =>{}
            },
            ...items.shortcut ? [{
              label:'Create a shortcut',
              icon:<Icon name={'Shortcut'} className="icon-mini" />,
              key:'shortcut',
              onClick:() => {},
              disabled:true
            }]: [],
            {
              label:'Share',
              icon:<Icon name='Share' className="icon-mini" />,
              key:'Share'
            },
            {
              label:'Broadcast',
              icon:<Icon name='Broadcast' className="icon-mini" />,
              key:'Broadcast'
            },
          ]}
        />

 

  </div>
  )
}
