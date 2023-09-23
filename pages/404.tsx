import Model from "@/components/home/Model";

export default function Custom404() {
    return (
        <div className="flex flex-row items-center">
            <h1 className="text-p1 text-[5rem] p-8">404, no page here. Have tree instead...</h1>
            <div className="w-[50%]">
                <Model />
            </div>
        </div>
    )
}