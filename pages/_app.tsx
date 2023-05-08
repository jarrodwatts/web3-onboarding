import type { AppProps } from "next/app";
import {
  localWallet,
  smartWallet,
  ThirdwebProvider,
} from "@thirdweb-dev/react";
import "../styles/globals.css";

const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      supportedWallets={[
        smartWallet({
          factoryAddress: "0x69608a6fE2e1Ce34eAcC4688502b2a2A1209EE2c", // Address of your account factory smart contract
          thirdwebApiKey:
            "e8472076e04067de52bd9b2251296f60d1da22f07e4c60c6cf8bbcfb3590aa474d045c0c62aeb2f7372b497f30def195f2152625a3603760352461dcbd0e0ed3", // The API key you got from the previous step
          gasless: true,
          personalWallets: [
            localWallet({
              persist: true,
            }),
          ],
        }),
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
