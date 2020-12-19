export interface FilmVariant {
  name?: string;
  scratchResistantCoating: string;
  visibleLightTransmission: string;
  irRejection?: string;
  glareReduction: string;
  ply: string;
  thinckness: string;
  visibleLightRefclectivity?: string;
  uvRejection: string;
  solarEnergyRejection: string;
  solarEnergyReflected: string;
  warranty: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Film {
  brand: string;
  title: string;
  vlts: string[];
  description?: string;
  variants: FilmVariant[];
  features: Feature[];
}
