import Link from "next/link";
import { WagmiConfig, createConfig, mainnet, configureChains } from 'wagmi'
import { createPublicClient, http } from 'viem'
import { celoAlfajores, polygonMumbai } from '@wagmi/chains'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import ToucanClient from "toucan-sdk";
import { RampInstantSDK } from "@ramp-network/ramp-instant-sdk";
import { connectorsForWallets, ConnectButton, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { infuraProvider } from 'wagmi/providers/infura'
import Onramp from "@/components/OnRamp";

function BuyInternal() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()
  if (isConnected)
    return (
      <div className="text-white">
        Connected to {address}
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    )
  return (
    <div>
      <ConnectButton label={"Login"} /> {/* Added margin for spacing */}
      <button onClick={() => connect()} className="text-white">Connect Wallet</button>
      </div>
  )
}
 
export default function Calculator() {
    return ( 

      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
         <section className="text-gray-600 body-font">
        <h2 className="pt-10 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
          Buy Buy Buy
        </h2>
        <br></br>
        <p className="mx-auto text-xl text-center text-p1 font-normal leading-relaxed fs521 lg:w-2/3">
          Buy the carbon credits so that you don't feel bad about not recycling... or something.
        </p>
        <div className="pt-12 pb-24 max-w-4xl mx-auto md:px-1 px-3">
          <ConnectButton label={"Login"} />
          <Onramp />
        </div>
      </section>
      </main>
    )
}