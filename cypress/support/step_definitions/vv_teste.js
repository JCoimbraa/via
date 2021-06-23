import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('que eu acesse a página da VV Test', function () {
    cy.access_url()
});

Given('acesse o menu {string}', function (pesquisa) {
 cy.acessar_menu(pesquisa)
});

When('eu preencher todos os campos obrigatórios', function () {
cy.preencher_campos_obrigatorios()
});

Then('deve ser direcionado para uma página de sucesso', function () {
cy.messagem_sucesso('Your form has been successfully submitted.')
});