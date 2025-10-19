import { ArrowDown } from "lucide-react"
import Image from "next/image"
import HelloWorld from "@/img/hello-world-html-code.png"

export default function SkillsetNav(){
    return(
         <div className="grid grid-cols-[auto_1fr] gap-50">
            <div className="grid grid-rows-3 gap-16 items-center">
                <div>
                    <div className="flex flex-col">
                        <a href="" className="flex flex-row items-center justify-baseline gap-6 group">
                            <span className="hover:underline transform transition-transform duration-300 uppercase font-extralight">Skillset</span>
                            <ArrowDown size={16} className="-rotate-45 group-hover:-rotate-90 transform transition-transform duration-300" />
                        </a>
                        <p className="text-2xl font-semibold uppercase">My coding Niche</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <a href="" className="flex flex-row items-center justify-baseline gap-6 group">
                            <span className="hover:underline transform transition-transform duration-300 uppercase font-extralight">Recent work</span>
                            <ArrowDown size={16} className="-rotate-45 group-hover:-rotate-90 transform transition-transform duration-300" />
                        </a>
                        <p className="text-2xl font-semibold uppercase">Spotify Copycat</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <a href="" className="flex flex-row items-center justify-baseline gap-6 group">
                            <span className="hover:underline transform transition-transform duration-300 uppercase font-extralight">Let's Work Together</span>
                            <ArrowDown size={16} className="-rotate-45 group-hover:-rotate-90 transform transition-transform duration-300" />
                        </a>
                        <p className="text-lg font-bold">markkirby1997@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <Image src={HelloWorld} alt="Hello World HTML image example" className="grayscale max-w-[650px]" />
            </div>
         </div>
    )
}