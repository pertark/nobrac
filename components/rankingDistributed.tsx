import Link from 'next/link'
import { useEnsAvatar, useEnsName } from 'wagmi'

export default function RankingDistributed(ensData,index){
    console.log(ensData)
    const address = ensData.ensData.creator.id
  const ensName = useEnsName({ address, chainId: 1 })
  const ensAvatar = useEnsAvatar({ name: ensName.data, chainId: 1 })
console.log(ensAvatar,index)
    let color = 'text-white';
    if (ensData.index == 0) color = 'text-amber-400';
    else if (ensData.index == 1) color = 'text-gray-300';
    else if (ensData.index == 2) color = 'text-yellow-600';

    return (
        <div className="bg-p2 text-white rounded-md p-2 mb-2 flex flex-row justify-between">
            <span className='flex flex-row items-center gap-2'>
                <img
                    src={ensAvatar.data || 'https://i.imgur.com/UhV7H97.jpeg'}
                    style={{ width: '2rem', height: '2rem', objectFit: 'cover' }}
                />
                <span><span className={color}>{Number(ensData.index) + 1}.</span> {
                    ensName.isError
                        ? 'Error loading name'
                        : ensName.isLoading
                            ? 'Loading...'
                            : ensName.data || <span className="text-gray-400">unnamed</span>
                }</span>
            </span>
            <span className="text-p4">{(ensData.index == 3) && <span className='italic underline text-blue-400 mr-4'><Link href="https://app.unlock-protocol.com/checkout?id=a314ca67-e0d0-450b-afb7-8bb70c3167ef">Mint NFT!</Link></span> }{(Number(ensData.ensData.amount) / 1000000000000000000).toFixed(2)}</span>
        </div>
    )
}