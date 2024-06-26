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

export const alchoholHealth = [
  {
    title: "0 à 0,2 g d'alcool/L de sang",
    items: [
      'Risque minime sur le long terme, mais une consommation régulière peut conduire à une dépendance.',
      'Risque faible sur le court terme, avec une légère altération de la coordination et une relaxation légère.',
      'État mental alerte et détendu.',
      "Légère relaxation, diminution de l'inhibition, diminution des capacités de concentration.",
    ],
  },
  {
    title: "0,2 à 0,5 g d'alcool/L de sang",
    items: [
      'Augmentation du risque de dépendance à long terme avec une consommation régulière.',
      'Altération modérée de la coordination, de la vision et du jugement.',
      'Légère euphorie, désinhibition modérée.',
      'Altération modérée de la coordination, augmentation de la sociabilité.',
    ],
  },
  {
    title: "0,5 à 1 g d'alcool/L de sang",
    items: [
      'Risque accru de dommages physiques et psychologiques à long terme.',
      'Altération significative de la coordination, du jugement et de la perception.',
      'Euphorie modérée, désinhibition, perte de jugement.',
      'Altération notable de la coordination, discours incohérent, diminution de la vigilance.',
    ],
  },
  {
    title: "1 à 2 g d'alcool/L de sang",
    items: [
      'Risque élevé de dommages organiques permanents et de dépendance.',
      "Perte de coordination, confusion mentale, risque d'accidents graves.",
      'Désorientation, agitation, agressivité.',
      'Perte de mémoire, discours incohérent, comportement imprudent.',
    ],
  },
  {
    title: "2 à 3 g d'alcool/L de sang",
    items: [
      'Risque imminent de dommages organiques graves, dépendance sévère.',
      "Risque d'effets toxiques sur le système nerveux central, risque de coma éthylique.",
      'Confusion sévère, désorientation totale.',
      'Difficulté à rester conscient, coma imminent sans intervention.',
    ],
  },
  {
    title: "Plus de 3 g d'alcool/L de sang",
    items: [
      'Risque de dommages organiques irréversibles, risque de décès imminent.',
      'Risque immédiat de coma, de détresse respiratoire, de choc alcoolique.',
      'Inconscience totale, absence de réaction aux stimuli.',
      'Coma éthylique, arrêt respiratoire, risque de mort sans intervention médicale immédiate.',
    ],
  },
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

export const modalVariantsAnimation = {
  hidden: {
    y: '100%',
  },
  visible: {
    y: '0',
    transition: {
      duration: 0.4,
      type: 'spring',
      bounce: 0,
    },
  },
  exit: {
    y: '100%',
    transition: {
      duration: 0.4,
      type: 'spring',
      bounce: 0,
    },
  },
};
