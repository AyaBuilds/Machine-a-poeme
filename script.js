document.getElementById("generer-poeme").addEventListener("click", function () {
    let couleur = document.getElementById("mot1").value.trim();
    let prenom = document.getElementById("mot2").value.trim();
    let saison = document.getElementById("mot3").value.trim();

    if (couleur === "" || prenom === "" || saison === "") {
        document.getElementById("poeme").textContent = "Veuillez entrer une couleur, un prénom et une saison.";
        return;
    }

    let poemes = [
        `Dans le ciel ${couleur}, un doux matin,\n${prenom} s’éveille, le cœur serein.\nLa brise de ${saison} danse et joue,\nEmportant l’amour jusqu’aux bouts.`,
        
        `Les feuilles ${couleur} tombent sans bruit,\n${prenom} sourit, la nuit s’enfuit.\nSous le vent doux de ${saison},\nLes rêves naissent, portés au loin.`,
        
        `Un papillon aux ailes ${couleur},\nSe pose sur l’épaule de ${prenom}.\nDans l’air léger de ${saison},\nTout scintille sous mille rayons.`,

        `La mer reflète un éclat ${couleur},\nTandis que ${prenom} chante en chœur.\n${saison} danse sous les étoiles,\nEt le monde devient féerique.`,
        
        `Un sentier aux reflets ${couleur},\nGuide les pas de ${prenom} rêveur.\nSous le ciel tendre de ${saison},\nLe vent murmure des souvenirs d’ailleurs.`
    ];

    let poemeAleatoire = poemes[Math.floor(Math.random() * poemes.length)];

    document.getElementById("poeme").textContent = poemeAleatoire;
});
