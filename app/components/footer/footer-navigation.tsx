import NavItem from "../navigation/navItem"
import footerLinks from "../../../data.json"

export default function FooterNav(){
    return(
        <div className="grid grid-flow-col grid-rows-1 text-xs">
            <ul className="flex flex-row items-center justify-center gap-4">
                {footerLinks.footer.map((item,idx) => {
                    return <li><NavItem key={`${item.label}_${idx}_footer`} label={item.label} url={item.url} /></li>
                })}
            </ul>
        </div>
    )
}