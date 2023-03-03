import { Web3Button } from "@thirdweb-dev/react";
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

export default function Component() {
  return (
    <div className='main-pg'>
  <iframe
    src="https://gateway.ipfscdn.io/ipfs/QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/erc721.html?contract=0x92eAF2C25bc4d33a1D2Ace072AdBA918c0ddafE2&chain=%7B%22name%22%3A%22Goerli%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fgoerli.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Goerli+Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22gor%22%2C%22chainId%22%3A5%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22goerli%22%7D"
    width="550px"
    height="550px"
    frameborder="30"
    ></iframe>
     <CrossmintPayButton
     className="bt-cross"
     clientId="764abbf0-ef42-42cf-9760-7d4f56551763"
     mintConfig={{"type":"thirdweb-drop","totalPrice":"0.001","quantity":"1"}}
     environment="staging"   
 />
<h3 className="footer">Developed by Mirac.eth</h3>
 </div>
  )
}
