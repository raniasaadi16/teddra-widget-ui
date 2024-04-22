import { Pagination } from "antd";
import Divider from "../Divider";

type Props = {
    totalHits:number,
    setPaginate:(data:{offset?:number, limit?:number, currentPage?:number})=> void,
    pagination:{offset:number, limit:number, currentPage:number},
    disabled:boolean,
    hidePanel:boolean
}
export default function PaginationComponent(props:Props) {
 

  const handlePginate = (page:number, pageSize:number) => {
    if (page !== 0) {
      props.setPaginate({ offset: (page - 1) * pageSize, limit: pageSize, currentPage: page })
    } else {
      props.setPaginate({ offset: pageSize, limit: pageSize, currentPage: page })
    }
  }


 

  return (
    <div className="flex w-full h-full overflow-hidden bar-h-mini bg-bars ">
        <div className={`flex-1 h-full z-10 relative transition-all duration-500`}>
          <div className="flex items-center space-x-7 h-full px-2">
            {!props.disabled && (
              <>
              <div className="flex space-x-3 items-center">
                <p className="text-xs before:py-0 cursor-context-menu">{props.pagination.limit < props.totalHits ? props.pagination.limit : props.totalHits} displayed publication</p>
                <Divider/>
                <p className="text-xs cursor-context-menu">{props.totalHits} total</p>
              </div>
              {props.totalHits > 0 && !props.hidePanel && (
                <Pagination current={props.pagination.currentPage} size="small" total={props.totalHits} showSizeChanger={false} onChange={handlePginate} pageSizeOptions={[7, 14, 20, 50]} pageSize={props.pagination.limit} className="text-xs"/>
              )}
              
              </>

            )}
            </div>
       
        </div>
    </div>
  )
}
