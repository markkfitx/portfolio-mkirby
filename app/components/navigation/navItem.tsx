import Link from "next/link"

interface navLink{
    label: string,
    url: string,
    children?: React.ReactNode
}

export default function NavItem({label,url,children}: navLink){
    return (
        <Link href={url} className="content-center bg-transparent text-white hover:text-gray-300 font-semibold py-1 px-3 text-xs">{label}</Link>
    )
}