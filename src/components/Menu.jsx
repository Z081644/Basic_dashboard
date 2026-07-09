import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";

const Menu=()=>
{
    return (
        <nav className="flex items-center justify-between px-2 py-3 border-1 bg-slate-500">
            <div className="text-xl font-bold tracking-tight">Menu</div>
            <div className="hidden md:flex items-center space-x-4">
                <a className="text-sm text-white font-medium transition-colors hover:text-foreground">
                    <Link to="/home"><Label>Home</Label></Link>
                </a>
                <a className="text-sm text-white font-medium transition-colors hover:text-foreground">
                <Link to="/about"><Label>About</Label></Link>
                </a>
                <a className="text-sm text-white font-medium transition-colors hover:text-foreground">
                <Link to="/services"><Label>Services</Label></Link>
                </a>
                <a className="text-sm text-white font-medium transition-colors hover:text-foreground">
                <Link to="/contact"><Label>Contact</Label></Link>
                </a>
            </div>
        </nav>

    )
}

export default Menu;