import Image from 'next/image'
import Link from 'next/link'
import {LiaGamepadSolid} from 'react-icons/lia'


export function Header(){
    return(
        <header className="w-full h-28 bg-slate-100 text-black px-2">
            <div className="max-w-screen-x1 mx-auto flex justify-center items-center h-28 sm:justify-between">
                <nav className="flex justify-center items-center gap-4">

                    <Link href="/">
                        <Image className="w-full"
                            src="/logo.svg"
                            alt="Logo do site dalygames"
                            width={200}
                            height={80}
                            priority={true}
                        />
                    </Link>
                    <Link href="/">
                        Game
                    </Link>
                    <Link href="/profile">
                        Perfil
                    </Link>

                </nav>

                <div className="hidden sm:flex justify-center items-center">
                    <Link href="/profile">
                        <LiaGamepadSolid size={34} color="#47556" />
                    </Link>
                </div>
            </div>
        </header>
    )
}