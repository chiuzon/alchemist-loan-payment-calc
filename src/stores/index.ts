import { createSignal } from "solid-js";

export enum ENetworks {
    ETH = "eth",
    ARB = "arb"
}

export const SupportedNetworks = [ENetworks.ETH, ENetworks.ARB]

export const NetworksMetadata = {
    [ENetworks.ETH]: {
        title: "Ethereum"
    },
    [ENetworks.ARB]: {
        title: "Arbitrium"
    }
}

export const currentNetwork = createSignal(ENetworks.ETH)