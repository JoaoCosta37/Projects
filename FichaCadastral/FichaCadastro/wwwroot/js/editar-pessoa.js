function loadData(situacoesEmpregoData, estadoCivilData, pessoaData) {
    $("#tabstrip").kendoTabStrip({
        animation: {
            open: {
                effects: "fadeOn"
            }
        }
    });

    let mascaras = getMascaras();

//    $('#idPessoa').val(pessoaData.Id);
//if (familiaData.Responsavel.Sexo == 'M') {
//        $('#sexoMasculino').prop('checked', true);
//    }
//    else {
//        $('#sexoFeminino').prop('checked', true);
//    }
//    $('#batizado').val(familiaData.Responsavel.Batizado);
//    $('#crismado').val(familiaData.Responsavel.Crismado);
//    $('#eucaristia').val(familiaData.Responsavel.Eucaristia);
//    $('#matrimonio').val(familiaData.Responsavel.Matrimonio);
}