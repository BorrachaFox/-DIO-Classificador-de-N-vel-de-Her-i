let nome = "Charles Lutador";
let qtd_exp = 6327;

calculaNivel = (xp) => {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp >= 1001 && XP <= 2000) {
        return "Bronze";
    } else if (xp >= 2001 && XP <= 5000) {
        return "Prata";
    } else if (xp >= 5001 && XP <= 7000) {
        return "Ouro";
    } else if (xp >= 7001 && XP <= 8000) {
        return "Platina";
    } else if (xp >= 8001 && XP <= 9000) {
        return "Ascendente";
    } else if (xp >= 9001 && XP <= 10000) {
        return "Imortal";
    } else if (xp >= 10001) {
        return "Radiante";
    } else {
        return "XP inválido";
    }
}

let nivel = calculaNivel(xp);
console.log(`O heroi de nome ${nome} esta no nivel de ${nivel}`)
