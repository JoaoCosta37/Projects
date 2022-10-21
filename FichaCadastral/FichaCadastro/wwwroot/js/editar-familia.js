function loadData(situacoesEmpregoData, estadoCivilData, familiaData) {

    $("#tabstrip").kendoTabStrip({
        animation: {
            open: {
                effects: "fadeOn"
            }
        }
    });

    let mascaras = getMascaras();

    $('#idFamilia').val(familiaData.Id);
    $('#endereco').val(familiaData.Endereco)
    $('#bairro').val(familiaData.Bairro)
    $('#municipio').val(familiaData.Municipio)
    $('#complemento').val(familiaData.Complemento)
    $('#ponto-referencia').val(familiaData.SituacaoEmprego.PontoReferencia)
    $("#historia-vida").val(familiaData.RelatoVida)

    //Endereço

    $("#numero").kendoMaskedTextBox({
        value: familiaData.NumeroEndereco,
        promptChar: " ",
        mask: mascaras.mascaraEnderecoNumero,
        unmaskOnPost: true
    });

    $('#cep').kendoMaskedTextBox({
        value:familiaData.Cep,
        promptChar: " ",
        mask: mascaras.mascaraEnderecoCep,
        unmaskOnPost: true
    });



    $('#residencia-propria').val(familiaData.ResidenciaPropria);

    //familia

    $("#renda-familia").kendoMaskedTextBox({
        value: familiaData.Renda,
        promptChar: " ",
        mask: mascaras.mascarasFamiliaRenda,
        unmaskOnPost: true
    });
    $("#quantidade-moradores").kendoMaskedTextBox({
        value: familiaData.QuantidadeMoradores,
        promptChar: " ",
        mask: mascaras.mascarasQuantidadeMoradores,
        unmaskOnPost: true
    });
    $("#quantidade-crianca").kendoMaskedTextBox({
        value: familiaData.QuantidadeCriancas,
        promptChar: " ",
        mask: mascaras.mascaraQuantidadeCriancas,
        unmaskOnPost: true
    });
    $("#quantidade-trabalhadores").kendoMaskedTextBox({
        value: familiaData.QuantidadeTrabalhadores,
        promptChar: " ",
        mask: mascaras.mascaraQuantidadeTrabalhadores,
        unmaskOnPost: true
    });

    $('#recebe-cesta-basica').val(familiaData.EstaRecebendoCestaBasica);

};