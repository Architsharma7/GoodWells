import { WagmiConfig } from "wagmi";
import { wagmiConfig } from "./config";
import SuperfluidWidget from "@superfluid-finance/widget";
import superTokenList from "@superfluid-finance/tokenlist";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

const Checkout = () => {
  const flowRate = "10";
  const address = "0x41D22F2e55BD7B6bbb16f82e852a58c36C5D5Cf8";

  const paymentOptions = {
    chainId: 42220,
    receiverAddress: address,
    superToken: {
      address: "0x62B8B11039FcfE5aB0C56E502b1C372A3d2a9c7A",
    },
    flowRate: {
      amountEther: flowRate,
      period: "month",
    },
  };

  const paymentDetails = {
    paymentOptions,
  };

  const productDetails = {
    name: `GoodWells DAO`,
    description: ``,
  };

  return (
    <div>
      <WagmiConfig config={wagmiConfig}>
        <ConnectButton.Custom>
          {({ openConnectModal, connectModalOpen }) => {
            const walletManager = {
              open: async () => openConnectModal(),
              isOpen: connectModalOpen,
            };
            return (
              <SuperfluidWidget
                paymentDetails={paymentDetails}
                productDetails={productDetails}
                tokenList={superTokenList}
                type="dialog"
                walletManager={walletManager}
              >
                {({ openModal }) => (
                  <button onClick={() => openModal()}>
                    Open Superfluid Widget
                  </button>
                )}
              </SuperfluidWidget>
            );
          }}
        </ConnectButton.Custom>
      </WagmiConfig>
    </div>
  );
};

export default Checkout;
