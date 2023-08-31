import { Web3Button } from "@thirdweb-dev/react";
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import { useState } from "react";

const KeyCross= process.env.NEXT_PUBLIC_CROSSMINT_CLIENT_ID;
export default function Component() {
  const [quantity, setQuantity] = useState(1);
  const unitPrice = 0.01; // price for one item

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const totalPrice = (unitPrice * quantity).toFixed(2);
  return (
    <div className='main-pg'>
<iframe
    src="https://embed.ipfscdn.io/ipfs/bafybeihazpt6pkm4azgtupdz7hc2j3o4zpjsvtcgfq4t2keozxkss3ud6q/?contract=0x1aBEC07a048bC63026900A2C52aFde82da5431CB&chain=%7B%22name%22%3A%22Mumbai%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fmumbai.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22maticmum%22%2C%22chainId%22%3A80001%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22mumbai%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fpolygon%2F512.png%22%2C%22height%22%3A512%2C%22width%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=b348d6571045948f6cc34cffc3589041&primaryColor=purple"
    width="600px"
    height="600px"
    style={{maxWidth:"100%;"}}
    frameborder="0"
></iframe>
<div className="action-container">
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          placeholder="Qty"
        />
        <span>Total Price: ${totalPrice}</span>
        <CrossmintPayButton
          className="bt-cross"
        clientId={KeyCross}
        projectId="c3f0a656-9ef0-4bcd-b5f2-2982578a8d2d"
        mintConfig={{
          "type": "thirdweb-drop",
          "totalPrice": `${totalPrice}`,
          "quantity": `${quantity}`
        }}
        environment="staging"
      />
      <h3 className="footer">Developed by Mirac.eth</h3>
    </div>
    </div>
  );
}