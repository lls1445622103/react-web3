"use client";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  coinbaseWallet,
  ledgerWallet,
  metaMaskWallet,
  rabbyWallet,
  rainbowWallet,
  safeWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import type { Transport } from "viem";
import { createConfig, http } from "wagmi";
import {
  mainnet,
  sepolia,
  polygon,
  polygonMumbai,
  optimism,
  optimismGoerli,
  arbitrum,
  arbitrumGoerli,
  zkSync,
  zkSyncSepoliaTestnet,
  linea,
  lineaTestnet,
  base,
  baseGoerli,
  bsc,
  bscTestnet,
} from "wagmi/chains";

import linea_logo from "../public/img/linea_logo.png";
import lineaTesnet_logo from "../public/img/lineaTesnet_logo.png";
import zksync_logo from "../public/img/zksync_logo.svg";

const walletConnectProjectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

if (!walletConnectProjectId) {
  throw new Error(
    "WalletConnect project ID is not defined. Please check your environment variables.",
  );
}
const hardhat = {
  id: 31337, // Hardhat 本地链的链ID
  name: "Hardhat Local",
  network: "hardhat",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["http://127.0.0.1:8545"], // 本地 Hardhat 节点的地址
    },
  },
  blockExplorers: {
    default: { name: "Hardhat Explorer", url: "http://127.0.0.1:8545" }, // 可选
  },
  testnet: true,
};

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [
        metaMaskWallet,
        rainbowWallet,
        walletConnectWallet,
        ledgerWallet,
        rabbyWallet,
        coinbaseWallet,
        argentWallet,
        safeWallet,
      ],
    },
  ],
  { appName: "Next-Web3-Boilerplate", projectId: walletConnectProjectId },
);

// Fix missing icons
const customZkSyncSepoliaTestnet = { ...zkSyncSepoliaTestnet, iconUrl: zksync_logo.src };
const customLinea = { ...linea, iconUrl: linea_logo.src };
const customLineaTestnet = { ...lineaTestnet, iconUrl: lineaTesnet_logo.src };

const transports: Record<number, Transport> = {
  [hardhat.id]: http(),
  [mainnet.id]: http(),
  [sepolia.id]: http(),
  [polygon.id]: http(),
  [polygonMumbai.id]: http(),
  [optimism.id]: http(),
  [optimismGoerli.id]: http(),
  [arbitrum.id]: http(),
  [arbitrumGoerli.id]: http(),
  [zkSync.id]: http(),
  [zkSyncSepoliaTestnet.id]: http(),
  [linea.id]: http(),
  [lineaTestnet.id]: http(),
  [base.id]: http(),
  [baseGoerli.id]: http(),
  [bsc.id]: http(),
  [bscTestnet.id]: http(),
};
export const wagmiConfig = createConfig({
  chains: [
    hardhat,
    mainnet,
    sepolia,
    polygon,
    polygonMumbai,
    optimism,
    optimismGoerli,
    arbitrum,
    arbitrumGoerli,
    customLinea,
    customLineaTestnet,
    zkSync,
    customZkSyncSepoliaTestnet,
    base,
    baseGoerli,
    bsc,
    bscTestnet,
  ],
  connectors,
  transports,
  ssr: true,
});
