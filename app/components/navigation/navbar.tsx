import NavItem from "@/app/components/navigation/navItem"
import data from "../../../data.json"

export default function Navbar(){
    return(
        <div className="w-fit flex flex-row gap-2">
            {data.navigation.map((item,idx) =>{
                return <NavItem key={`${item.label}_${idx}`} label={item.label} url={item.url}  />
            })}
        </div>
    )
}