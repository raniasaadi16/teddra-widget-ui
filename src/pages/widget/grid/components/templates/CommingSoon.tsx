import { ServerWithHomeDesq } from "../../../../../types";
import LazyImage from "../Image";
import Title from "./shared/title";

export default function CommingSoonTemplate({dc, domain, placeholder} : {dc:ServerWithHomeDesq, domain:string, placeholder?:boolean}){
    return (
        <div className={`relative w-full h-full`}>
            <LazyImage src={dc.image ? (!dc.image.includes('unsplash') ? [dc.image.split('?')[0], '_800x571','?',dc.image.split('?')[1] ].join('') : dc.image) : '/datacenter.jpg'} className="object-cover  w-full h-full opacity-20" style={{filter:'grayscale(1)'}} alt="" />
            {placeholder && (
                <div className="absolute w-full h-full flex items-center top-0 right-0">
                    <div className='max-w-[101px] flex-1 flex flex-col justify-center pl-[28px] relative z-10 '>
                        <Title title={dc.title?.en ? dc.title.en :dc.title} domainColor={dc.color2} domain={domain} />
                        <p className="text-[7px]">comming soon</p>
                    </div>

                </div>

            )}
        </div>
    )
}