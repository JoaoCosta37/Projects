﻿//0—Digit.Accepts any digit between 0 and 9.
//9—Digit or space.Accepts any digit between 0 and 9 or space.
//#—Digit or space.Identical to Rule 9. In addition, allows the + (plus) and - (minus) signs.
//L—Letter.Restricts the input to a - z and A - Z letters.This rule is equivalent to[a - zA - Z] in regular expressions.
//?—Letter or space.Restricts the input to letters a - z and A - Z.This rule is equivalent to[a - zA - Z] |\s in regular expressions.
//&—Character.Accepts any character except a space.The rule is equivalent to \S in regular expressions.
//C—Character or space.Accepts any character.The rule is equivalent to.in regular expressions.
//A—Alphanumeric.Accepts letters and digits only.
//a—Alphanumeric or space.Accepts only letters, digits, and space.

function getMascaras() {
    return {
        mascaraNome: "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC", // 100
        mascaraRg: "AA.AAA.AAA-A",
        mascaraCpf: "000.000.000-00",
        mascaraCelular: "(00) 0 0000 - 0000",
        mascaraTelefone: "(00) 0000 - 0000",
        mascaraProfissao: "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC", //50
        mascaraEndereco: "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC", //150
        mascaraEnderecoNumero: "0000000000", //10
        mascaraEnderecoCep: "00000-000",
        mascaraBairro: "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC", //100
        mascaraMunicipio: "CCCCCCCCCCCCCCCCCCCC", //20
        mascaraComplemento: "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC", //100
        mascaraPontoReferencia: "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC", //200
        mascarasFamiliaRenda: "0000000000000000000", //19
        mascarasQuantidadeMoradores: "0000", //4
        mascaraQuantidadeCriancas: "0000", //4
        mascaraQuantidadeTrabalhadores: "0000", //4
        mascaraRelatoVida: "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC", //500
    }
}