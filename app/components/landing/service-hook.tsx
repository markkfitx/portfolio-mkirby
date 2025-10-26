import Image from "next/image"
import avatarImage from "../../../img/avatar.jpg"
import SubTitle from "@/app/components/sub-title"

interface componentObj{
    id: string
}
export default function ServicesHook({id}:componentObj){
    return(
        <div className="grid grid-cols-[auto_1fr] gap-16">
            <SubTitle
                title="Hi There!"
                subText="I connect design and code with"
            />
            <div className="relative flex justify-center md:justify-end mt-12 md:mt-0 top-[3rem]" id={id}>
                <div className="absolute bottom-0 right-0 w-[650px] h-2/3 bg-trans-gray translate-x-4 translate-y-4 rounded-md hidden md:block">
                    <div className="space-y-3 mt-8 text-lg tracking-wide relative right-[6px]">
                        <div className="flex items-center gap-3">
                            <span className="text-gray-300 font-bold">→</span>
                            <span className="text-lg tracking-wide">WEB DESIGN (UX/UI)</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-gray-300 font-bold">→</span>
                            <span className="text-lg tracking-wide">WEB DEVELOPMENT</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-gray-300 font-bold">→</span>
                            <span className="text-lg tracking-wide">SEO OPTIMIZATION</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-gray-300 font-bold">→</span>
                            <span className="text-lg tracking-wide">OWASP SECURITY</span>
                        </div>
                    </div>
                </div>
                <Image src={avatarImage} alt="Avatar image | Mark Kirby" className="max-w-[350px] grayscale " />
            </div>
        </div>
    )
}