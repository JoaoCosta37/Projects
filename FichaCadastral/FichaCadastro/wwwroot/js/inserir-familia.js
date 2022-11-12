function createForm(situacoesEmpregoData, estadoCivilData, familiaData) {

    $("#tabstrip").kendoTabStrip({
        animation: {
            open: {
                effects: "fadeOn"
            }
        }
    });

    let mascaras = getMascaras();

    //Pessoa


    $('#rg').kendoMaskedTextBox({
        promptChar: " ",
        mask: mascaras.mascaraRg,
        unmaskOnPost: true
    });

    $('#cpf').kendoMaskedTextBox({
        promptChar: " ",
        mask: mascaras.mascaraCpf,
        unmaskOnPost: true
    });

    let widgetDataNascimento = $("#data-nascimento").kendoDatePicker({
        promptChar: " ",
        culture: "pt-BR",
    });

    widgetDataNascimento.input.attr("readonly", true);

    $("#phone_number").kendoMaskedTextBox({
        promptChar: " ",
        mask: mascaras.mascaraCelular,
        unmaskOnPost: true
    });

    $("#tel_number").kendoMaskedTextBox({
        promptChar: " ",
        mask: mascaras.mascaraTelefone,
        unmaskOnPost: true
    });

    let widgetEstadoCivil = $('#estado-civil').kendoComboBox({
        dataTextField: "Descricao",
        dataValueField: "Id",
        dataSource: estadoCivilData,
        filter: "contains",
        suggest: true,
        index: 0
    }).data("kendoComboBox");

    widgetEstadoCivil.input.attr("readonly", true);

    let widgetSitEmprego = $('#situacao-emprego').kendoComboBox({
        dataTextField: "Descricao",
        dataValueField: "Id",
        dataSource: situacoesEmpregoData,
        filter: "contains",
        suggest: true,
        index: 0
    }).data("kendoComboBox");

    widgetSitEmprego.input.attr("readonly", true);


    $("#numero").kendoMaskedTextBox({
        promptChar: " ",
        mask: mascaras.mascaraEnderecoNumero,
        unmaskOnPost: true
    });

    $('#cep').kendoMaskedTextBox({
        promptChar: " ",
        mask: mascaras.mascaraEnderecoCep,
        unmaskOnPost: true
    });

    //familia

    $("#renda-familia").kendoMaskedTextBox({
        promptChar: " ",
        mask: mascaras.mascarasFamiliaRenda,
        unmaskOnPost: true
    });
    $("#quantidade-moradores").kendoMaskedTextBox({
        promptChar: " ",
        mask: mascaras.mascarasQuantidadeMoradores,
        unmaskOnPost: true
    });
    $("#quantidade-crianca").kendoMaskedTextBox({
        promptChar: " ",
        mask: mascaras.mascaraQuantidadeCriancas
    });
    $("#quantidade-trabalhadores").kendoMaskedTextBox({
        promptChar: " ",
        mask: mascaras.mascaraQuantidadeTrabalhadores,
        unmaskOnPost: true
    });

    $("#formFamilia").on("submit", function (e) {
        e.preventDefault();
        let form = $("#formFamilia");

        let validator = form.kendoValidator().data("kendoValidator");


        if (validator) {
            var resultOfValidation = validator.validate();
        }

        let formData = form.serialize();

        $.post(form.attr('action'), formData).done(function (data) {
            console.log(data);
        })
            .fail(function (data) {
                console.log(data);
                alert("error");
            });

    });

};