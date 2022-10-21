function editLinkRenderer(instance, td, row, col, prop, value, cellProperties) {
    // be sure you only allow certain HTML tags to avoid XSS threats
    // (you should also remove unwanted HTML attributes)
    td.innerHTML = `<a href='/CadastroFamilia/Editar?idFamilia=${value}'> Editar </a>`
}

function createGrid(data) {
    const container = document.getElementById('grid-familia');
    const hot = new Handsontable(container, {
        data: data,
        rowHeaders: true,
        colHeaders: ['Responsável', 'Está recebendo cesta', 'Endereço', 'Número', 'Bairro', ''],
        className: 'htLeft',
        columns: [
            {
                data: 'Nome'
            },
            {
                data: 'EstaRecebendoCestaBasica',
                type: 'checkbox',
                className: 'htCenter'
            },
            {
                data: 'Endereco',
            },
            {
                data: 'NumeroEndereco',
            },
            {
                data: 'Bairro',
            },
            {
                data: 'IdFamilia',
                renderer: editLinkRenderer
            }
        ],
        dropdownMenu: true,
        filters: true,
        width: 1000,
        height: 500,
        licenseKey: 'non-commercial-and-evaluation' // for non-commercial use only
    });

}