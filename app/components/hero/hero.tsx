import {Plus, X, ChevronDown} from "lucide-react"
import Image from "next/image"
import reactIcon from "@/img/react-icon.png"
import nextIcon from "@/img/nextjs-icon.png"

export default function Hero(){
    return (
        <div className="w-full content-middle hero">
            <div className="grid-rows-4 grid-flow-col">
                <div className="col"><h1>Beyond</h1></div>
                <div className="col">
                    <div className="flex flex-row items-center justify-baseline">
                        <h1>Code</h1>
                        <div className="flex flex-row justify-center items-center flex-1 gap-6">
                            <p className="border-2 border-white rounded-full text-white text-md px-3 font-medium flex items-center h-8">
                                2020 - 2025
                            </p>
                            <div className="flex flex-row gap-0 items-center justify-center">
                                <Plus size={40} color="#ffffff" strokeWidth={1.5} absoluteStrokeWidth className="relative left-[8px]" />
                                <X size={40} color="#ffffff" strokeWidth={1.5} absoluteStrokeWidth className="relative right-[8px]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="flex flex-row items-center justify-end">
                        <div className="flex flex-row justify-center flex-1">
                             <p className="border-2 border-white rounded-full text-white text-md px-3 font-medium flex items-center h-8 gap-3">
                                Powered By
                                <div className="flex flex-row flex-nowrap justify-baseline items-center gap-2">
                                    <Image alt="React Icon" src={reactIcon} className="w-4 text-shadow-md"/>
                                    <Image alt="NextJS Icon" src={nextIcon} className="w-10 text-shadow-md"/>
                                </div>
                            </p>
                            
                        </div>
                         <h1>Its An</h1>
                    </div>
                </div>
                <div className="col"><h1 className="text-end">Experience</h1></div>
            </div>
        </div>
    )
}