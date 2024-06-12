// This script is untested

import { SchemaRegistry } from "@ethereum-attestation-service/eas-sdk";
import { Wallet, JsonRpcProvider } from 'ethers';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file based on the current environment
const envFile = `../.env.${process.env.NODE_ENV || 'development'}`;
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

// Set up the provider and signer
const provider = new JsonRpcProvider(process.env.RPC_URL);
const privateKey = process.env.PRIVATE_KEY;
const signer = new Wallet(privateKey, provider);

const schemaRegistryContractAddress = "0xYourSchemaRegistryContractAddress"; // @ron todo
const schemaRegistry = new SchemaRegistry(schemaRegistryContractAddress);

// Connect the schema registry with the signer
schemaRegistry.connect(signer);

const schema = "uint256 eventTimestamp, string srs, string[] coordinates, string[] recipeType, bytes[] recipePayload, string[] mediaType, bytes[] mediaData"; // @ron confirm
const resolverAddress = "0x55D26f9ae0203EF95494AE4C170eD35f4Cf77797"; // Arbitrum Goerli: https://github.com/ethereum-attestation-service/eas-contracts/tree/master?tab=readme-ov-file#arbitrum-goerli
const revocable = true;

const transaction = await schemaRegistry.register({
  schema,
  resolverAddress,
  revocable,
});

// Wait for transaction to be validated
await transaction.wait();