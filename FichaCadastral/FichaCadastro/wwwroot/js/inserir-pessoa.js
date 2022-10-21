function createForm(situacoesEmpregoData, estadoCivilData, familiaData) {

    $("#tabstrip").kendoTabStrip({
        animation: {
            open: {
                effects: "fadeOn"
            }
        }
    });

    let mascaras = getMascaras();

    $('#rg').kendoMaskedTextBox({
        mask: mascaras.mascaraRg,
        unmaskOnPost: true
    });

    $('#cpf').kendoMaskedTextBox({
        mask: mascaras.mascaraCpf,
        unmaskOnPost: true
    });

    $("#data-nascimento").kendoDatePicker({
        culture: "pt-BR"
    });

    $("#phone_number").kendoMaskedTextBox({
        mask: mascaras.mascaraCelular,
        unmaskOnPost: true
    });

    $("#tel_number").kendoMaskedTextBox({
        mask: mascaras.mascaraTelefone,
        unmaskOnPost: true
    });

    $('#estado-civil').kendoComboBox({
        dataTextField: "Descricao",
        dataValueField: "Id",
        dataSource: estadoCivilData,
        filter: "contains",
        suggest: true,
        index: 0
    });

    $('#situacao-emprego').kendoComboBox({
        dataTextField: "Descricao",
        dataValueField: "Id",
        dataSource: situacoesEmpregoData,
        filter: "contains",
        suggest: true,
        index: 0
    });
};