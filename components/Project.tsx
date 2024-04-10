import Link from "next/link";

export default function Project(props: { name: string, description: string, projectId?: string }) {
    return (
        <div className="flex flex-col gap-5 justify-center pt-10 border shadow pb-10 select-text">
            <span className="text-3xl">{props.name}</span>
            <span className="text-neutral-500 pt-3">{props.description}</span>
            {props.projectId && (
                <div>
                    <Link href={`/projects/${props.projectId}`}>
                        <button
                            className="bg-primary rounded-full w-1/4 p-2 text-neutral-100 hover:bg-primary-100">Learn
                            more
                        </button>
                    </Link>
                </div>
            )}
        </div>
    )
}