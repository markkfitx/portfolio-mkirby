import Image from "next/image"
import SubTitle from "@/app/components/sub-title"
import avatarImage from "../../../img/avatar.jpg"
import Link from "next/link"
import { BookOpenCheck } from "lucide-react"

interface componentObj{
    id: string
}
export default function About({id}: componentObj){
    return(
        <div className="grid grid-cols-[auto_1fr] gap-16" id={id}>
            <div className="relative flex justify-center md:justify-end mt-12 md:mt-0 top-[3rem]">
                <div className="absolute bottom-0 left-0 w-[650px] h-2/3 bg-trans-gray -translate-x-4 translate-y-4 rounded-md hidden md:block">
                    <div className="space-y-8 mt-8 text-lg tracking-wide relative left-125">
                        <div className="flex flex-row gap-8 items-center justify-baseline">
                            <div className="rounded-full border-3 border-white p-4">
                                <BookOpenCheck />
                            </div>
                            <span className="text-xs tracking-wider leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut ornare magna. Fusce eu sem quam. Aliquam id ultrices turpis, ut sodales massa. Nunc sagittis, quam sit amet feugiat ullamcorper, risus massa sagittis risus, vel auctor nunc nibh vitae nisl. Sed vel condimentum leo. Vestibulum fermentum eu est vitae congue.</span>
                        </div>
                        <div className="flex flex-row gap-8 items-center justify-baseline">
                            <div className="rounded-full border-3 border-white p-4">
                                <BookOpenCheck />
                            </div>
                            <span className="text-xs tracking-wider leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut ornare magna. Fusce eu sem quam. Aliquam id ultrices turpis, ut sodales massa. Nunc sagittis, quam sit amet feugiat ullamcorper, risus massa sagittis risus, vel auctor nunc nibh vitae nisl. Sed vel condimentum leo. Vestibulum fermentum eu est vitae congue.</span>
                        </div>
                        <Link href="" className="text-sm relative left-24 group"><span className="text-gray-300 font-bold mr-3 group-hover:text-lime-400 transition-all duration-200">→</span>Learn More</Link>
                    </div>
                </div>
                <Image src={avatarImage} alt="Avatar image | Mark Kirby" className="max-w-[350px] grayscale " />
            </div>
            <SubTitle 
                title="About Me"
                subText="Mark Kirby"
            />
        </div>
    )
}