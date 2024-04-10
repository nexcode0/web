import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="p-4 pr-6 lg:p-4">
            <div className="container mx-auto flex justify-between items-center select-none">
                <div className="flex items-center space-x-4">
                    <Link href="/">
                        <Image className="hover:opacity-50" src="/logo.svg" alt="Logo" width={64} height={64}/>
                    </Link>
                </div>

                <div className="flex items-center space-x-4 text-gray-600">
                    {/*<a className="hover:text-primary hover:opacity-80" href="/#projects">Projects</a>*/}
                    <a className="hover:text-primary hover:opacity-80" href="/contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}