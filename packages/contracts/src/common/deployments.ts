import { VertexContracts } from './vertexContracts';
import ArbitrumGoerliCoreDeployment from './deployments/core/deployment.arbitrumGoerli.json';
import ArbitrumOneCoreDeployment from './deployments/core/deployment.arbitrumOne.json';
import LocalCoreDeployment from './deployments/core/deployment.localhost.json';

import ArbitrumGoerliLbaDeployment from './deployments/lba/deployment.arbitrumGoerli.json';
import ArbitrumOneLbaDeployment from './deployments/lba/deployment.arbitrumOne.json';
import LocalLbaDeployment from './deployments/lba/deployment.localhost.json';

import { ChainEnv } from './types';

export type VertexDeploymentAddresses = {
  [K in keyof VertexContracts]: string;
};

/**
 * Known deployment addresses for the Vertex contracts
 */
export const VERTEX_DEPLOYMENTS: Record<ChainEnv, VertexDeploymentAddresses> = {
  testnet: {
    ...ArbitrumGoerliLbaDeployment,
    ...ArbitrumGoerliCoreDeployment,
  },
  mainnet: {
    ...ArbitrumOneCoreDeployment,
    ...ArbitrumOneLbaDeployment,
  },
  local: {
    ...LocalCoreDeployment,
    ...LocalLbaDeployment,
  },
};
