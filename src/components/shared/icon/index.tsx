import { iconType } from "../../../types"
import Icon from "../../icons/Icon"
import ReactSvg from "../ReactSvg"

type Props = {
    icon:iconType,
    iconSize:string
}
export const RenderIcon =(props: Props) => {
    return (
        <div className={props.iconSize}>
            {props.icon.type === 'icon' ? <Icon name={props.icon.src} className="w-full h-full"/> : <ReactSvg src={props.icon.src} className="w-full h-full"/>}
        </div>
    )
}