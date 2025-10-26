
import Navigation from "../footer/footer-navigation"
export default function Footer(){
    return(
        <footer className="w-full mt-10 bg-trans-gray">
            <div className="flex justify-between mx-[0.68em] p-8 ">
                <div className="copyright text-baseline text-xs">
                    &copy;
                    <span className="ml-1">{(new Date().getFullYear())} Mark Kirby</span>
                </div>
                <Navigation />
            </div>
        </footer>
    )
}