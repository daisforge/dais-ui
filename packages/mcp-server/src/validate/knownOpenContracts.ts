import { OPEN_CONTRACT_AUDIT } from './openContractAudit.js';

/** Ограничение закрытости API, а не разрешение пропускать проверку именованных полей. */
export const KNOWN_OPEN_CONTRACTS = new Set<string>(OPEN_CONTRACT_AUDIT.keys());
