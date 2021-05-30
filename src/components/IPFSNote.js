import React, {useEffect, useState} from 'react'

const IPFSNote = () => {
    const [ipfs, setIPFS] = useState("loading")
    useEffect(() => {
       const getIt = async ()  => {
          const r = await fetch('https://api.fleek.co/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': '8N9Bljgrtb2u7PcSoy+hWnx8i2MyvT6a/H4N3re/nUs='
          },
          body: JSON.stringify({"query": '{getSiteBySlug(slug: "herrkin") {latestDeploy { ipfsHash }}}'})
        })
        const {data:{getSiteBySlug:{latestDeploy:{ipfsHash}}}} = await r.json()
      
        setIPFS(ipfsHash)
    }
        getIt()
    },[])

    return ipfs === "loading" ? 
    <div>{ipfs}</div> :
    <div>this site was deployed to ipfs using fleek<br/> 
     <a href={`http://ipfs.io/ipfs/${ipfs}`}>{ipfs}</a>  
    </div>
   
}
export default IPFSNote