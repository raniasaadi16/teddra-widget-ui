import { iconType } from "../../../types"
import { RenderIcon } from "../icon"

type Props =   {
    active?:boolean,
    suffix?:{icon:iconType, size:'sm' | 'mini', onClick?:() => void},
    prefix?:{icon:iconType, size:'sm' | 'mini'},
    children:JSX.Element,
    buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement>,
    mode?: 'tab' | 'button',className?:string
}
export const ButtonLg = (props:Props) => {
    return (
        <button className={`disabled:fill-skin-muted disabled:text-skin-muted px-3 flex space-x-2 items-center  bg-hover-transparent rounded cursor-pointer input-h no-dragable ${props.active ?  props.mode !== 'tab' ? 'bg-skin-fill-inverted text-skin-inverted fill-skin-inverted' : 'active-mode' : 'bg-hover-transparent'} no-dragable `} {...props.buttonProps}>
            {props.prefix && (
                <RenderIcon icon={props.prefix.icon} iconSize={props.prefix.size === 'sm' ? 'icon-sm' : 'icon-mini'}/>
            )}
            <p>
                {props.children}
            </p>
            {props.suffix && (
                <button onClick={props.suffix.onClick}>

                    <RenderIcon icon={props.suffix.icon} iconSize={props.suffix.size === 'sm' ? 'icon-sm' : 'icon-mini'}/>
                </button>
            )}
          
        </button>
    )
}