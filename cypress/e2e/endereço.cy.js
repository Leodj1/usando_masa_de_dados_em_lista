/// <reference types="cypress" />
import EndereçoPage from '../support/page-objets/endereço.page'
const dadosEndereço = require('../fixtures/endereço.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
   beforeEach(() => {
      cy.visit('minha-conta')
      cy.fixture('perfil').then(dados => {
         cy.login(dados.usuario, dados.senha)
      })

   });

   it('Deve fazer cadastro de faturamento com sucesso', () => {
      EndereçoPage.editarEndereçoFaturamento('Leonardo', 'Rodriguez', 'Gogle', 'Brasil', 'Av Brasil', '1000', 'São Paulo', 'São Paulo', '01000222', '2000000203', 'email@teste.com')
      cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

   });

   it('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
      EndereçoPage.editarEndereçoFaturamento(
         dadosEndereço[1].nome,
         dadosEndereço[1].sobrenome,
         dadosEndereço[1].empresa,
         dadosEndereço[1].pais,
         dadosEndereço[1].endereço,
         dadosEndereço[1].numero,
         dadosEndereço[1].cidade,
         dadosEndereço[1].estado,
         dadosEndereço[1].cep,
         dadosEndereço[1].telefone,
         dadosEndereço[1].email,
      )
      cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

   });

});
