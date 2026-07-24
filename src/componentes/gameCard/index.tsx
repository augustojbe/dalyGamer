import Image from 'next/image'
import Link from 'next/link'
import {BiRightArrowCircle} from 'react-icons/bi'
import {GameProps} from '@/utils/types/game'


interface GameCardProp{
    data: GameProps
}
export function GameCard({data}: GameCardProp){
    return(
        <Link href={`/game/${data.id}`}>
            <section className="w-full bg-slate-200 rounded-ls p4 mb-5">
                <div className="relative w-full h-56 hover:scale-105 transition-all duration-300">
                    <Image 
                        className="rounded-lg objetc-cover"
                        src={data.image_url}
                        alt={data.title}
                        fill={true}
                        quality={100}
                        sizes="(max-width: 768px) 100vm, (max-width: 1200px) 44vm"
                    />
                </div>
                <div className="flex items-center  mt-4 justify-between">
                    <p className='text-sm font-bold px-2 text-black text-ellipsis truncate whitespace-nowrap overflow-hidden'>{data.title}</p>
                    <BiRightArrowCircle size={24} color="#009"/>
                </div>
            </section>
        </Link>
    )
}