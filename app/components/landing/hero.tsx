"use client"
import { SlidingNumber } from "@/components/ui/shadcn-io/sliding-number";
import {Plus, X, Minus, ChevronDown} from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import reactIcon from "@/img/react-icon.png"
import nextIcon from "@/img/nextjs-icon.png"

export default function Hero(){
    function getCurrentYear(): number {
        const now = new Date();

        // Validate that Date object is valid
        if (isNaN(now.getTime())) {
            throw new Error("Unable to retrieve current date.");
        }

        return now.getFullYear();
    }
    const [year, setYear] = useState(getCurrentYear())
    return (
        <div className="w-full content-middle hero">
            <div className="grid-rows-4 grid-flow-col">
                <div className="col"><h1>Beyond</h1></div>
                <div className="col">
                    <div className="flex flex-row items-center justify-baseline">
                        <h1>Code</h1>
                        <div className="flex flex-row justify-center items-center flex-1 gap-6">
                            <p className="border-2 border-white rounded-full text-white text-md px-3 font-medium flex items-center h-8">
                                <SlidingNumber
                                    number={2020}
                                    inView={true}
                                    decimalPlaces={0}
                                    transition={{ stiffness: 200, damping: 15 }}
                                /> - 
                                <SlidingNumber
                                    number={year}
                                    inView={true}
                                    decimalPlaces={0}
                                    transition={{ stiffness: 200, damping: 15 }}
                                />
                            </p>
                            <div className="flex flex-row gap-0 items-center justify-center">
                                <button onClick={() => setYear((prev) => prev +1)} className="group">
                                    <Plus size={40} strokeWidth={1.5} absoluteStrokeWidth className="relative left-[8px] text-white group-hover:text-lime-400 transition-colors duration-200 animate-pulse" />
                                </button>
                                <button onClick={() => setYear(getCurrentYear())} className="group">
                                    <X size={40} strokeWidth={1.5} absoluteStrokeWidth className="relative right-[4px] text-white group-hover:text-yellow-400 animate-pulse transition-all duration-200" />
                                </button>
                                <button onClick={() => setYear((prev) => prev -1)} className="group">
                                    <Minus size={40} strokeWidth={1.5} absoluteStrokeWidth className="relative right-[16px] text-white group-hover:text-red-400 animate-pulse transition-colors duration-200" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="flex flex-row items-center justify-end">
                        <div className="flex flex-row justify-center flex-1">
                             <p className="border-2 border-white rounded-full text-white text-md px-3 font-medium flex items-center h-8 gap-3">
                                Powered By
                                <span className="flex flex-row flex-nowrap justify-baseline items-center gap-2">
                                    <Image alt="React Icon" src={reactIcon} className="w-4 text-shadow-md"/>
                                    <Image alt="NextJS Icon" src={nextIcon} className="w-10 text-shadow-md"/>
                                </span>
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