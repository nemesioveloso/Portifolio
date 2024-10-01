/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_KEYCLOAK_REALM: string
  readonly VITE_KEYCLOAK_URL: string
  readonly VITE_KEYCLOAK_CLIENT: string
  readonly VITE_API_BASE_URL: string
  readonly ALLOW_ORIGIN: string
  readonly VITE_BASE_PATH: string
  // outras variáveis de ambiente que você pode ter
}

export interface ImportMeta {
  readonly env: ImportMetaEnv
}
