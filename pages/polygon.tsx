import ZeroDevWrapper from "@/components/ZeroDevWrapper";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Polygon() {
    return (
            <div className="h-screen flex items-center justify-center">
            <h1 className="text-white">Polygon</h1>
            <ConnectButton label={"Login"} /> {/* Added margin for spacing */}
            </div>
    )
}