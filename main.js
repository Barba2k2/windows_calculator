var vaiMudar = false, cont, valor, historico = Array(), memoria = Array(), fe = false, hyp = false; deg = "deg";

function atualiza() {
    $(this).css('background-color', 'rgb(192,192,192)');
    valor = $('#valor').text();
    valor = valor.replace(',', '.');
    setTimeout(function () {
        $('.col').css('background-color', 'rgb(240, 240, 240)');
        $('.numeors').css('background-color', 'rgb(250, 250, 250)');
    }, 100);

    $('.col').hover(function () {
        $(this).css('background-color', 'rgb(216, 216, 216)');
    }, function () {
        $(this).css('background-color', 'rgb(240, 240, 240)');
    });

    $('.numeros').hover(function () {
        $(this).css('background-color', 'rgb(216, 216, 216)');
    }, function () {
        $(this).css('background-color', 'rgb(250, 250, 250)');
    });
};

$(document).on('click', '.numeors', function () {
    atualiza();
    if (valor.length < 15)
        $('#valor').html(valor == "0" || vaiMudar ? $(this).text().trim() : (valor + $(this).text().trim().replace('.', ',')));

});