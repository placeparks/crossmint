import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;
  const Key= process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;
  
function MyApp({ Component, pageProps }) {

  return (
    <ThirdwebProvider desiredChainId={activeChainId}
    	clientId={Key}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp
