import Link from "next/link";
import { WagmiConfig, createConfig, mainnet, configureChains, usePublicClient, useWalletClient, usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'
import { createPublicClient, http, parseEther } from 'viem'
import { celoAlfajores, polygonMumbai } from '@wagmi/chains'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import ToucanClient from "toucan-sdk";
import { RampInstantSDK } from "@ramp-network/ramp-instant-sdk";
import { connectorsForWallets, ConnectButton, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { infuraProvider } from 'wagmi/providers/infura'
import Onramp from "@/components/OnRamp";
import { Contract } from "ethers";
import { getContract } from "viem"
// import nct from "@/abis/nct.json";
import { poolTokenABI } from "@/abis/pools";
import { useEffect } from "react";
import React from "react";

const polygon_nct_contract_addr = "0xD838290e877E0188a4A44700463419ED96c16107"
const mumbai_nct_contract_addr = "0x7beCBA11618Ca63Ead5605DE235f6dD3b25c530E"
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
 
export default function Buy() {
  const [error, setError] = React.useState<string | Event | null>(null);

  useEffect(() => {
    console.log("event listener up")
    const temp = window.console.error;
    window.console.error = (error, url, line) => {
      console.log(error)
      setError(error);
    };

    return () => {
      // clean up
      window.console.error = temp;
    }
  }, []);
  // const account = useAccount();
  // const publicClient = usePublicClient();
  // // const { data: walletClient, isError,  } = useWalletClient();
  // console.log(account)
  
  // async function autoOffsetCO2() {
    // const provider = await account?.connector?.getProvider();
    // console.log(provider)
    // if (!provider) return;
    // // const toucan = new ToucanClient("alfajores", provider, signer);
    // const toucan = new ToucanClient("mumbai", provider, provider);

    // // const nct = await toucan.getPoolContract("NCT");
    // // const out = nct.approve(toucan.getTCO2Contract("NCT").address, parseEther("1.0"));
    // // console.log(out)

    // const contract = new Contract(mumbai_nct_contract_addr, ["function approve(address spender, uint256 amount) public returns (bool)"], provider);
    // const conn = contract.connect(provider);
    // console.log(conn)
    // const res = conn.interface.getFunction("approve");
    // console.log(res)
  
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
        <div className="pt-12 pb-24 max-w-4xl mx-auto md:px-1 px-3 flex flex-col gap-2 content-center items-center justify-center">
          { error && <div className="text-red-500">{error.toString()} <Link href="/issues/zerodev"><span className="text-red-300 underline italic">Why is this error showing up?</span></Link></div> }
          <div className="w-fit ">
            <ConnectButton label={"Login"} />
          </div>
          <Onramp />
          {/* <button onClick={() => autoOffsetCO2()}>Buy Offset</button> */}
          {/* <RedeemAndRetire /> */}
        </div>
      </section>
      </main>
    )
}