export enum Languages {
  "ro" = "ro",
  "en" = "en",
}

export interface LocalizationContextType {
  _trans: (key: string) => string;
}
