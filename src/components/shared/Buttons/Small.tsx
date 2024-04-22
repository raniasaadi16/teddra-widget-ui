import Icon from "../../icons/Icon"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    active?:boolean,
    icon:string,
    iconSize:'mini' | 'sm'
}
export const ButtonSm = (props:Props) => {
    return (
        <button {...props} className={` bg-hover-transparent p-1.5 rounded disabled:fill-skin-muted disabled:opacity-50 h-max`}>
            <div className={`${props.active ? props.iconSize === 'mini' ? 'active-mode-mini' : 'active-mode' : ''}`}>
                <Icon name={props.icon} className={`${props.iconSize === 'mini'? 'icon-mini' : 'icon-sm'}`} />
            </div>
        </button>
    )
}