export default function Page() {
    return <>
        <div className="grid gap-y-10 select-none">
            <div className="bg-gray-100 container p-10 max-w-full grid lg:grid-cols-2 gap-x-14">
                    <span className="text-neutral-600">
                        <span className="text-7xl font-semibold">Contact</span>
                        <span className="text-7xl text-primary font-semibold"> us</span>
                        <div className="text-neutral-500 pt-8">
                            <p className="text-neutral-500 pt-8">
                                You can contact us at
                                <a href="mailto:placeholder@nexcode.org"
                                   className="text-primary hover:underline hover:text-primary-100"> placeholder@nexcode.org</a>
                            </p>
                            <p className="pt-2 text-lg">
                                Nexcode Limited is a company registered in England and Wales with company number 14665873 under the Companies Act 2006.
                            </p>
                        </div>
                    </span>
            </div>
        </div>
    </>
}