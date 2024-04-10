import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return <div className="pb-3 bg-gray-100">
        <div className="flex flex-col items-center pt-5 gap-y-3">
            <div>
                <Link href="https://github.com/nexcode0">
                    <Image className="hover:opacity-50" src="/github.svg" alt="Logo" width={24} height={24}/>
                </Link>
            </div>
            <div className="text-neutral-500">
                © Copyright Nexcode Limited {new Date(Date.now()).getFullYear()}
            </div>
        </div>
    </div>
}