# 📍 Location Proof Protocol

The Location Proof Protocol aims to address the challenge of proving location on the decentralized web in a flexible, yet standardized way. 

Given the diverse requirements and approaches for location proofs, our goal is to support innovation across a wide range of proof strategies while providing a standard data model for creating and verifying these proofs. 

This repository currently contains the code necessary to deploy the core Ethereum Attestation Service (EAS) schema for the protocol. The standard includes a framework (in development) for building "recipes" that allow for many different strategies for proving location to be added. 

## The Challenge

### Broad Approaches to Location Proofs

- **Authority-based Strategies**: Authorized individuals attest to someone's presence. i.e. ticket checkers, event hosts
- **Social Strategies**: People verify each other's claims, confirming or challenging their validity. i.e. permissionless social confirmation, perhaps with sybil-resistant scoring of confirmer accounts; PIN exchange
- **Near-field Machine Strategies**: Hardware devices attest to the presence of another device through information exchange or cryptographic 'endorsement' of a claim. i.e. RFID; NFC; Bluetooth
- **Network Machine Strategies**: Nodes on a local network or hardware wallets triangulate position and sign confirmation attestations. i.e. Time of Flight; Time Difference of Arrival 
- **Sensor Data Strategies**: Where devices sense local networks, environmental conditions, images + audio, accelerometers, etc, and location is discerned from analysis of this evidence. i.e. radio frequency / optical / inertial / acoustic / magnetometer localization

In addition to these different categories of strategies, various verification schemes can be employed to endow location proof recipes with a different attributes, such as privacy, game theoretic assurances of validity, etc.
- **Time-based Schemes**: Involves waiting or challenge periods.
- **Cryptographic Schemes**: Zero-knowledge proofs verified on-chain or in peer nodes.
- **AI-based Schemes**: Analyzing photos or contextual information.
- **Economic Schemes**: Requires payment or staking value for proof creation.

This is an incomplete list, and we hope to support a growing set of experiments in location proof design.

### Diverse Spatial Reference Systems

Location proofs may not always relate to Earth-based coordinates but could be relative to other objects or within different spatial reference systems, such as:
- Being with a person at a particular time
- Location in a metaverse space
- Presence in a vehicle or a specific room

Astral's Location Proof Protocol aims to support location proofs within a wide range of different spatial reference systems, both global and relative. However, initial development of the protocol will focus on positioning objects / events on Earth.

## Our Approach

### Generalized Location Proof Protocol

We are developing a protocol that accommodates various proof strategies while maintaining a standard data model and tools for creating and verifying location proofs.

## Repository Contents

- **Contract Deployment Scripts**: Scripts to deploy the core EAS schema for the Location Proof Protocol.
- **Configuration Files**: Configuration files for different environments (e.g., development, testing, production).
- **Documentation**: Detailed documentation on how to deploy and interact with the EAS schema.

## Getting Started

### Prerequisites

- Node.js and npm
- Ethers.js library
- Infura or another Ethereum RPC provider account

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/location-proof-protocol.git
   cd location-proof-protocol
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Deployment

## Setup

1. Copy the appropriate example environment file to `.env`:
   ```sh
   cp .env.development .env
   # or
   cp .env.testing .env
   # or
   cp .env.production .env

2. Run the deployment script:
   ```sh
   yarn deploy-schema:development
   ```

## Contributing

We welcome contributions to improve the protocol and tools. Please read our [contributing guidelines](https://github.com/AstralProtocol/astralprotocol/wiki/Contributing-guidelines) for more details.
