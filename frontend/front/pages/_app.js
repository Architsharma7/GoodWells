import "../styles/globals.css";
import localFont from "@next/font/local";
import { ChakraProvider } from "@chakra-ui/react";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { celo } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import Navbar from "../components/navbar";
import { useRouter } from "next/router";
import { AuthProvider } from "../auth/authContext";

const { chains, provider } = configureChains(
  [celo],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const myFont = localFont({ src: "./CalSans-SemiBold.woff2" });

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showNavbar = router.pathname == "/" ? false : true;
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ChakraProvider>
          <AuthProvider>
            <main className={myFont.className}>
              {showNavbar && <Navbar />}
              <Component {...pageProps} />
            </main>
          </AuthProvider>
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
