// Cette variable va contenir le mot ou la phrase entré de l'utilisateur
let motUtilisateur;

// Cette variable va contenir le score de l'utilisateur, il commence par 0
let score = 0;

// Tant que l'utilisateur n'a pas fait un choix, on lui redemande 
let choix = prompt("Veuillez choisir la liste : mots ou phrases");
while (choix !== "mots" && choix !== "phrases") {
  choix = prompt("Veuillez choisir la liste : mots ou phrases");
}

// Si l'utilisateur choisit mots, on lui demande d'écrire le mot
if (choix === "mots") {
  for (let i = 0; i < listeMots.length; i++) {
    let motUtilisateur = prompt("Entrer le mot : " + listeMots[i]);
    if (motUtilisateur === listeMots[i]) {
      score++;
    }
  }
  console.log("Votre score est de " + score + " sur " + listeMots.length);
// Si l'utilisateur choisit phrases, on lui demande d'écrire la phrase 
} else {
  for (let i = 0; i < listePhrases.length; i++) {
    let motUtilisateur = prompt("Entrer la phrase : " + listePhrases[i]);
    if (motUtilisateur === listePhrases[i]) {
      score++;
    }
  }
  console.log("Votre score est de " + score + " sur " + listePhrases.length);
}

