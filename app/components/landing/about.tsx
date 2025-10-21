import Image from "next/image"
import SubTitle from "@/app/components/sub-title"
import avatarImage from "../../../img/avatar.jpg"
import { BookOpenCheck } from "lucide-react"

export default function About(){
    return(
        <div className="grid grid-cols-[auto_1fr] gap-16">
            <div className="relative flex justify-center md:justify-end mt-12 md:mt-0 top-[3rem]">
                <div className="absolute bottom-0 left-0 w-[650px] h-2/3 bg-[rgba(255,255,255,0.1)] -translate-x-4 translate-y-4 rounded-md hidden md:block">
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