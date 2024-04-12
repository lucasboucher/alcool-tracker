export const alcoholAdvices = [
  "Bienvenue sur l'application qui donne votre taux d'alcoolémie selon votre consommation !",
  'Cette application est un outil de prévention et ne remplace pas un test d’alcoolémie.',
  "De nouvelles fonctionnalités arriveronts dans les prochaines semaines, n'hésitez pas à revenir !",
  'Il est recommandé de ne pas prendre plus de 10 verres standard par semaine et pas plus de 2 verres standard par jour.',
  'L’outil Alcoomètre proposé par Alcool-info-service.fr permet de s’auto-évaluer sur votre consommation sur le long terme : alcoometre.fr.',
  'Il est recommandé de boire lentement, en mangeant et en alternant avec de l’eau.',
  'L’alcool est obtenu par fermentation de végétaux riches en sucre, ou par distillation, et intervient dans la composition des boissons alcoolisées.',
  'Le vin constitue les deux tiers de la conso totale d’alcool pur en France.',
  'La France se classe parmi les premiers pays européens ayant une importante consommation d’alcool.',
  '"L\'alcool enivre les sens, mais éveille les passions." - Alexandre Dumas',
  '"L\'alcool est comme l\'amour : il te rend fou ou te rend heureux." - Georges Brassens',
  '"L\'alcool est une drogue sournoise qui te fait croire que tu es plus intelligent, plus fort, plus drôle. En réalité, tu es juste plus saoul." - Bill Wilson',
  "L'abus d'alcool est dangeureux pour la santé, à consommer avec modération.",
];

export const ALCOHOL_DENSITY = 0.0789; // Densité de l'alcool en g/cL
export const ELIMINATION_RATE = 0.15; // Vitesse d'élimination de l'alcool en g/L/h
export const ALCOHOL_DISTRIBUTION_RATIO = {
  // Coefficient de distribution de l'alcool dans le sang
  female: 0.55,
  male: 0.68,
};
export const BAC_LIMIT_BY_LICENSE_TYPE = {
  true: 0.2,
  false: 0.5,
};
