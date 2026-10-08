export interface RegionConfig {
  id: string;
  name: string;
  flag: string;
  wsUrl: string;
  httpUrl: string;
}

export const REGIONS: RegionConfig[] = [
  { id: "eu", name: "Europe", flag: "EU", wsUrl: "wss://eu.proofstrike.io/ws", httpUrl: "https://eu.proofstrike.io" },
  { id: "us", name: "US", flag: "US", wsUrl: "wss://us.proofstrike.io/ws", httpUrl: "https://us.proofstrike.io" },
  {
    id: "asia",
    name: "Asia",
    flag: "AS",
    wsUrl: "wss://asia.proofstrike.io/ws",
    httpUrl: "https://asia.proofstrike.io",
  },
];

export function getRegions(): RegionConfig[] {
  const isDev = location.port === "5173" || location.port === "5174" || location.port === "3000";
  if (!isDev) return REGIONS;
  // In dev, proxy WS through Vite (same origin) to avoid mixed-content blocks on HTTPS
  const wsProto = location.protocol === "https:" ? "wss:" : "ws:";
  const httpProto = location.protocol;
  const host = location.host; // includes port
  return [
    { id: "local", name: "Local", flag: "DEV", wsUrl: `${wsProto}//${host}/ws`, httpUrl: `${httpProto}//${host}` },
  ];
}

export const PING_THRESHOLD_MS = 160;
