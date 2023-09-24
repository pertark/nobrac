import { useEnsAvatar, useEnsName } from 'wagmi'

export default function RankingDistributed(ensData,index){
    console.log(ensData)
    const address = ensData.ensData.creator.id
  const ensName = useEnsName({ address, chainId: 1 })
  const ensAvatar = useEnsAvatar({ name: ensName.data, chainId: 1 })
console.log(ensAvatar,index)
    return (
        <div className="bg-p2 text-white rounded-md p-2 mb-2 flex flex-row justify-between">
            <img
                src={ensAvatar.data || 'https://i.imgur.com/UhV7H97.jpeg'}
                style={{ width: '2rem', height: '2rem', objectFit: 'cover' }}
            />
            <span>{Number(ensData.index) + 1}. {
                ensName.isError
                    ? 'Error loading name'
                    : ensName.isLoading
                        ? 'Loading...'
                        : ensName.data || 'No name set'
            }</span>
            <span className="text-p4">{(Number(ensData.ensData.amount) / 1000000000000000000).toFixed(2)}</span>
        </div>
    )
}