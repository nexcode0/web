import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="grid gap-y-10 select-none">
                <div
                    className="bg-gray-100 container p-10 md:p-0 max-w-full grid text-center lg:text-left lg:grid-cols-2">
                    <div className="md:pt-20 lg:pl-20 lg:grid grid-rows-2">
                    <span className=" justify-center text-neutral-600 pt-20">
                        <div className="grid md:gap-y-4">
                            <div>
                             <span className="text-2xl md:text-7xl font-semibold">Accelerating <span
                                 className="text-primary">digital</span></span>
                            </div>
                            <div>
                               <span className="text-2xl md:text-7xl text-primary font-semibold">transformation 🚀</span>
                            </div>
                        </div>

                        <p className="text-neutral-500 pt-8">Constantly seeking for innovation within technology</p>
                    </span>
                    </div>

                    <div className="lg:pl-20 pt-20 ">
                        <Image src="/picture.svg" alt="Logo" width={600} height={283}/>
                    </div>
                </div>
                {/*<div id="projects" className="text-center grid gap-y-3">*/}
                {/*    <span className="text-4xl text-neutral-700">Projects</span>*/}
                {/*    <span className="text-neutral-500 text-xl">What do we actually do...</span>*/}
                {/*    <div className="grid container mx-auto grid-cols-3 pt-8 px-10 gap-x-20 gap-y-10 d">*/}
                {/*        <Project name="Test" description="Test"/>*/}
                {/*        <Project name="Test" description="Test 1221e123" projectId="test"/>*/}
                {/*        <Project name="Test" description="Test"/>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </>
    );
}
