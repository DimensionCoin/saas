import Image from "next/image"

export const Loader = () => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            <div className="w-40 h-40 relative animate-pulse">
                <Image
                alt="logo"
                fill
                src="/logo.png"/>
            </div>
            <p className="text-sm text-muted-foreground">
                Buddy Is Thinking..
            </p>
        </div>
    )
}