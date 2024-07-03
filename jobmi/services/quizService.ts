export interface MetierScores {
  [key: string]: number;
}
  
export const initialMetierScores: MetierScores = {
  "Infirmier": 0,
  "Psychologue": 0,
  "Assistant social": 0,
  "Coach en bien-être": 0,
  "Spécialiste en santé mentale au travail": 0,
  "Designer graphique": 0,
  "Architecte": 0,
  "Développeur de jeux": 0,
  "Spécialiste en IA": 0,
  "Développeur Blockchain": 0,
  "Data Scientist": 0,
  "Analyste financier": 0,
  "Ingénieur réseau": 0,
  "Spécialiste en cybersécurité": 0,
  "Analyste en Big Data": 0,
  "Responsable marketing": 0,
  "Chef de projet": 0,
  "Community manager": 0,
  "Consultant en développement durable": 0,
  "Consultant en transformation numérique": 0,
  "Responsable événementiel": 0,
  "Manager logistique": 0,
  "Consultant en télétravail": 0,
  "Responsable de la culture d'entreprise": 0,
  "Technicien de laboratoire": 0,
  "Ingénieur en biotechnologies": 0,
  "Expert en robotique": 0,
  "Géologue": 0,
  "Chimiste": 0,
  "Illustrateur": 0,
  "Artiste": 0,
  "UX/UI Designer": 0,
  "Développeur": 0,
  "Diététicien": 0,
  "Physiothérapeute": 0,
  "Programmeur": 0,
  "Growth Hacker": 0,
  "Expert en marketing digital": 0,
  "Acteur": 0,
  "Musicien": 0,
  "Critique littéraire": 0,
  "Éditeur": 0,
  "Spécialiste en réalité augmentée": 0,
  "Guide touristique": 0,
  "Photographe": 0,
  "Journaliste": 0,
  "Consultant en inclusion sociale": 0,
  "Expert en développement de produits bio": 0,
  "Ingénieur mécanique": 0,
  "Ingénieur civil": 0,
  "Ingénieur en énergies renouvelables": 0,
  "Technicien de maintenance": 0,
  "Conducteur de travaux": 0,
  "Responsable RSE": 0
};
  
const attribuerPoints = (classement: number, metiersList: string[], metiers: MetierScores) => {
  metiersList.forEach(metier => {
    if (classement === 1) {
      metiers[metier] += 5;
    } else if (classement === 2) {
      metiers[metier] += 4;
    } else if (classement === 3) {
      metiers[metier] += 3;
    } else if (classement === 4) {
      metiers[metier] += 2;
    } else if (classement === 5) {
      metiers[metier] += 1;
    }
  });
};
  
  export const calculateResults = (answers: number[][]): MetierScores => {
    const metiers: MetierScores = { ...initialMetierScores };
  
    // Initialiser les points
    for (let metier in metiers) {
      metiers[metier] = 0;
    }
  
    const activites = answers[0];
    const environnement = answers[1];
    const force = answers[2];
    const secteur = answers[3];
    const interets = answers[4];
  
    // Attribuer des points en fonction des réponses
    // Activités préférées
    attribuerPoints(activites[0], ["Infirmier", "Psychologue", "Assistant social", "Coach en bien-être", "Spécialiste en santé mentale au travail"], metiers);
    attribuerPoints(activites[1], ["Designer graphique", "Architecte", "Développeur de jeux", "Spécialiste en IA", "Développeur Blockchain"], metiers);
    attribuerPoints(activites[2], ["Data Scientist", "Analyste financier", "Ingénieur réseau", "Spécialiste en cybersécurité", "Analyste en Big Data"], metiers);
    attribuerPoints(activites[3], ["Responsable marketing", "Chef de projet", "Community manager", "Consultant en développement durable", "Consultant en transformation numérique"], metiers);
    attribuerPoints(activites[4], ["Chef de projet", "Responsable événementiel", "Manager logistique", "Consultant en télétravail", "Responsable de la culture d'entreprise"], metiers);

    // Environnement de travail préféré
    attribuerPoints(environnement[0], ["Analyste financier", "Ingénieur réseau", "Data Scientist", "Développeur", "Ingénieur en énergies renouvelables"], metiers);
    attribuerPoints(environnement[1], ["Designer graphique", "Architecte", "Développeur de jeux", "UX/UI Designer", "Growth Hacker"], metiers);
    attribuerPoints(environnement[2], ["Responsable RH", "Commercial", "Community manager", "Coach en développement personnel", "Expert en marketing digital"], metiers);
    attribuerPoints(environnement[3], ["Géologue", "Ingénieur civil", "Photographe", "Guide touristique", "Journaliste"], metiers);
    attribuerPoints(environnement[4], ["Chimiste", "Ingénieur réseau", "Technicien de laboratoire", "Spécialiste en nanotechnologies", "Développeur d'assistants virtuels"], metiers);

    // Force professionnelle
    attribuerPoints(force[0], ["Designer graphique", "Illustrateur", "Développeur de jeux", "Artiste", "Développeur de réalité virtuelle"], metiers);
    attribuerPoints(force[1], ["Psychologue", "Infirmier", "Assistant social", "Coach en bien-être", "Spécialiste en santé mentale au travail"], metiers);
    attribuerPoints(force[2], ["Data Scientist", "Analyste financier", "Ingénieur réseau", "Analyste en Big Data", "Spécialiste en cybersécurité"], metiers);
    attribuerPoints(force[3], ["Responsable marketing", "Chef de projet", "Community manager", "Consultant en transformation numérique", "Consultant en développement durable"], metiers);
    attribuerPoints(force[4], ["Chef de projet", "Responsable événementiel", "Manager logistique", "Responsable RSE", "Consultant en télétravail"], metiers);

    // Secteur d’activité préféré
    attribuerPoints(secteur[0], ["Designer graphique", "Architecte", "Illustrateur", "Artiste", "UX/UI Designer"], metiers);
    attribuerPoints(secteur[1], ["Infirmier", "Psychologue", "Diététicien", "Coach en bien-être", "Spécialiste en santé mentale au travail"], metiers);
    attribuerPoints(secteur[2], ["Développeur", "Data Scientist", "Ingénieur réseau", "Spécialiste en IA", "Développeur Blockchain"], metiers);
    attribuerPoints(secteur[3], ["Responsable marketing", "Commercial", "Community manager", "Growth Hacker", "Expert en marketing digital"], metiers);
    attribuerPoints(secteur[4], ["Ingénieur mécanique", "Chimiste", "Géologue", "Ingénieur en énergies renouvelables", "Expert en robotique"], metiers);

    // Centres d'intérêt
    attribuerPoints(interets[0], ["Coach sportif", "Physiothérapeute", "Kinésithérapeute", "Guide touristique", "Spécialiste en santé mentale au travail"], metiers);
    attribuerPoints(interets[1], ["Critique littéraire", "Éditeur", "Musicologue", "Journaliste", "Spécialiste en réalité augmentée"], metiers);
    attribuerPoints(interets[2], ["Artiste", "Acteur", "Designer graphique", "Illustrateur", "Spécialiste en réalité augmentée"], metiers);
    attribuerPoints(interets[3], ["Développeur de jeux", "Programmeur", "Game designer", "Développeur de réalité virtuelle", "Développeur Blockchain"], metiers);
    attribuerPoints(interets[4], ["Guide touristique", "Photographe", "Journaliste", "Consultant en inclusion sociale", "Expert en développement de produits bio"], metiers);

    return metiers;
  };
  
  export const getTopResults = (metiers: MetierScores, topN: number = 3) => {
    return Object.entries(metiers).sort((a, b) => b[1] - a[1]).slice(0, topN);
  };
    
  
  export const getResultImage = (firstResult: string): string => {
    const metierImages = {
      "https://zupimages.net/up/24/26/gj3p.png": ["Data Scientist", "Analyste en Big Data", "Analyste financier", "Géologue", "Chimiste", "Technicien de laboratoire", "Ingénieur en biotechnologies", "Expert en robotique"],
      "https://zupimages.net/up/24/26/rga6.png": ["Designer graphique", "Architecte", "Illustrateur", "Artiste", "UX/UI Designer"],
      "https://zupimages.net/up/24/26/mahp.png": ["Développeur de jeux", "Spécialiste en IA", "Développeur Blockchain", "Ingénieur réseau", "Spécialiste en cybersécurité", "Développeur", "Programmeur", "Spécialiste en réalité augmentée"],
      "https://zupimages.net/up/24/26/rqtw.png": ["Infirmier", "Psychologue", "Assistant social", "Coach en bien-être", "Spécialiste en santé mentale au travail", "Diététicien", "Physiothérapeute", "Consultant en inclusion sociale"],
      "https://zupimages.net/up/24/26/7wma.png": ["Data Scientist", "Analyste financier", "Analyste en Big Data"],
      "https://zupimages.net/up/24/26/k4fp.png": ["Responsable marketing", "Community manager", "Growth Hacker", "Expert en marketing digital"],
      "https://zupimages.net/up/24/26/vyuz.png": ["Chef de projet", "Consultant en développement durable", "Consultant en transformation numérique", "Responsable événementiel", "Manager logistique", "Consultant en télétravail", "Responsable de la culture d'entreprise", "Responsable RSE"],
      "https://zupimages.net/up/24/26/12j9.png": ["Acteur", "Musicien", "Critique littéraire", "Éditeur"],
      "https://zupimages.net/up/24/26/g9o0.png": ["Guide touristique", "Photographe", "Journaliste"],
      "https://zupimages.net/up/24/26/khqj.png": ["Ingénieur mécanique", "Ingénieur civil", "Ingénieur en énergies renouvelables", "Conducteur de travaux", "Technicien de maintenance", "Expert en développement de produits bio"]
    };
  
    for (const [image, metiers] of Object.entries(metierImages)) {
      if (metiers.includes(firstResult)) {
        return image;
      }
    }
  
    return ""; // Default image or empty if no match found
  };
  