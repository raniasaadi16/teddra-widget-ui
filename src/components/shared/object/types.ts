import { DropdownProps } from "antd"

export type ObjectProps = {
    children: React.ReactElement,
    onClick?: Function,
    active?:boolean,
    className?:string,
    draggable?:boolean,
    onDragStart?:React.DragEventHandler<HTMLDivElement>,
    noHover?:boolean
}
export type ObjectWithDropdownProps = ObjectProps & {
    dropdownProps:DropdownProps | null
}