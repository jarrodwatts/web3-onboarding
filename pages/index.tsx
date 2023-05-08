import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50vw",
        height: "75vh",
      }}
    >
      <Web3Button
        contractAddress="0x5523B2CB564579aAf2947B8d08e2187ff35aE4b2"
        action={(contract) => contract.erc721.claim(1)}
        onSuccess={() => alert("Claimed!")}
      >
        Claim NFT!
      </Web3Button>
    </div>
  );
};

export default Home;
