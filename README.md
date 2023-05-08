# Local Wallet + Account Abstraction

Create a web3 onboarding experience that:
- Generates an EOA under the hood and stores it on the user's device.
- Uses a [smart wallet account factory contract](https://thirdweb.com/thirdweb.eth/AccountFactory) to generate smart wallets on the fly
- Generated EOA is a signer for the generated smart wallet

Users can now interact with smart contracts such as the NFT drop in this example from their smart wallet without ever signing a message or accepting a transaction.
