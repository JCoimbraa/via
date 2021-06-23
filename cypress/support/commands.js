import Locators from '../support/locators/locators'
const locators = new Locators

Cypress.Commands.add("access_url", () => { 
    cy.visit('/')
})

Cypress.Commands.add('acessar_menu', (pesquisa) => { 
    cy.get(locators.menu()).contains(pesquisa).click({force:true})
})

Cypress.Commands.add('preencher_campos_obrigatorios', () => { 
    cy.get(locators.nome()).click({force:true}).type('Teste')
    cy.get(locators.sobrenome()).type('teste')
    cy.get(locators.email()).type('teste@teste.com')
    cy.get(locators.repetirEmail()).type('teste@teste.com')
    cy.get(locators.idade()).click({force:true})
    cy.get(locators.experiencia()).select('Menos de 5 anos')
    cy.get(locators.motivo()).select('Desafio')
    cy.get(locators.melhorar()).click({force:true})
    cy.get(locators.liguegemProgramacao()).type('JS')
    cy.get(locators.btnEnviar()).click({force:true})
})

Cypress.Commands.add('messagem_sucesso', (mensagem) => { 
    cy.get(locators.sucesso()).should('contains.text', mensagem)
})