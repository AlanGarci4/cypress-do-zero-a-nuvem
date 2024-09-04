// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })
// describe('Central de Atendimento ao Cliente TAT', () => {
  // it('verifica o título da aplicação', () => {
  //   // cy.visit('C:/cypress-do-zero-a-nuvem/src/index.html')
  //   cy.visit('./src/index.html')

  //   // Verifica o título da página
  //   // cy.title().should('eq', 'Central de Atedntimento ao Cliente TAT')
  //   cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  //   // cy.title().should('eq', 'CAC TAT')

        // // Verifica o título da página
        // // cy.title().should('eq', 'Central de Atedntimento ao Cliente TAT')
        // cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        // // cy.title().should('eq', 'CAC TAT')
    
    // describe('Central de Atendimento ao Cliente TAT', () => {
    //   it('Exercício 1', () => {
    //     // cy.visit('C:/cypress-do-zero-a-nuvem/src/index.html')
    //     cy.visit('./src/index.html')
    //     cy.get('[name="open-text-area"]')
    //     .type('Asasdfaskfndasmnfd3121321200#$!@%#%@#%@#$%@#%@#%QFFQWQREQGQERGQEmlmaçkamgnmlqmerg31', {delay: 0})

    //Início do Curso e Resposta dos Exercícios da Segunda Lição (02.md)
    describe('Central de Atendimento ao Cliente TAT', () => {
      beforeEach(() => {
        cy.visit('./src/index.html');
      })
      
      it('Verifica o Título da Aplicação', () => {
          cy.visit('./src/index.html')
          cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        // cy.title().should('eq', 'CAC TAT')
      })
      
      it('Preenche os Campos Obrigatórios e Envia Formulário', () => {
        // cy.visit('C:/cypress-do-zero-a-nuvem/src/index.html')
        // cy.visit('./src/index.html');
        cy.get('[name="firstName"]').type('Rodolfo');
        cy.get('[name="lastName"]').type('Evangelino');
        cy.get('input[type="email"]').type('teste@teste.com.br');
        cy.get('select[id="product"]').select('Blog');
        cy.contains('label', 'Elogio').click();
        cy.get('[name="open-text-area"]')
        .type('Teste Incial/Cabeçalho. Preenche os Campos Obrigatórios e Envia Formulário');
        cy.contains('Enviar').click();

        cy.get('.success').should('be.visible');
        // cy.get('@msgUncessfull')
        // .should('have.value', 'Valide os campos obrigatórios!')
      })

      it('Exercício Extra 1 - Utilização do delay (options)', () => {
        const textoLongo = Cypress._.repeat('Texto extenso para verificação do option delay, incluído dentro da função da área de texto', 5)
        cy.get('[name="open-text-area"]').type(textoLongo, { delay: 0})
      })

      it('Exercício Extra 2 - Preenche Sem Campo Obrigatório e Envio do Formulário (e-mail incorreto)', () => {
        // cy.visit('C:/cypress-do-zero-a-nuvem/src/index.html')
        // cy.visit('./src/index.html');
        cy.get('[name="firstName"]').type('Rodolfo');
        cy.get('[name="lastName"]').type('Evangelino');
        cy.get('input[type="email"]').type('teste@.com.br');
        cy.get('select[id="product"]').select('Mentoria');
        cy.contains('label', 'Feedback').click();
        cy.get('[name="open-text-area"]')
        .type('Novo texto para exercício extra 2, preenchimento com o formato do e-maol incorreto');
        cy.contains('Enviar').click();
        
        cy.get('.error').should('be.visible')
        // cy.get('@msgUncessfull')
        // .should('have.value', 'Valide os campos obrigatórios!')
      })

      it('Exercício Extra 3 - Número de Telefone Incorreto, Somente Aceitar Valores Numéricos', () => {
        cy.get('[id="phone"]')
         .type('abcdef')
         .should('have.value', '');
      })

      it('Exercício Extra 4 - Número de Telefone Obrigatório, Com Envio Sem Preenchimento Anterior', () => {
        cy.get('[name="firstName"]').type('Rodolfo');
        cy.get('[name="lastName"]').type('Evangelino');
        cy.get('input[type="email"]').type('teste@big.com.br');
        cy.get('[id="phone-checkbox"]').click();
        cy.get('[name="open-text-area"]')
        .type('Novo texto para teste de exercício extra 4');
        cy.contains('Enviar').click();

        cy.get('.error').should('be.visible');
      })

      it('Exercício Extra 5  - Preenche e Limpa os Campos Nome, Sobrenome, Email e Telefone', () => {
        cy.get('[name="firstName"]')
          .type('Rodolfo')
          .should('have.value', 'Rodolfo')
          .clear()
          .should('have.value','');
        cy.get('[name="lastName"]')
          .type('Evangelista')
          .should('have.value', 'Evangelista')
          .clear()
          .should('have.value','');
        cy.get('input[type="email"]')
          .type('teste@big.com.br')
          .should('have.value', 'teste@big.com.br')
          .clear()
          .should('have.value','');
        cy.get('[id="phone"]')
          .type('85999964125')
          .should('have.value', '85999964125')
          .clear()
          .should('have.value','');
      })

      it('Exercício Extra 6  - Exibe Mensagem de Erro ao Submeter o Formulário Sem Preencher os Campos Obrigatórios', () => {
        cy.contains('button', 'Enviar').click();
        cy.get('.error').should('be.visible');

      })

      it('Exercício Extra 7 - Versão 1  - Envia o Formulário com Sucesso Usando um Comando Customizado', () => {
          cy.fillMandatoryFieldsAndSubmit()

          cy.get('.success').should('be.visible');
        
      })

      it('Exercício Extra 7 - Versão 2  - Envia o Formulário com Sucesso Usando um Comando Customizado', () => {
        const data = {
          firstName:'Lizandro',
          lastName: 'Lopes Figueiredo',
          email: 'tiotio@tio.com',
          text: 'Teste da Segunda Versão do Exercício de Comandos Customizados'
        }
        
        cy.fillMandatoryFieldsAndSubmit(data)

        cy.get('.success').should('be.visible');
      
    })

    it('Exercício Extra 7 - Versão 3  - Envia o Formulário com Sucesso Usando um Comando Customizado', () => {
      cy.fillMandatoryFieldsAndSubmit()

      cy.get('.success').should('be.visible');
    
  })

      it('Exercício Extra 8  - Realizar Localização dos Elementos Encontrados com o Comando cy.get() para cy.contains() ', () => {
        // cy.contains('option', 'Blog');
        // cy.contains('option', 'Cursos');
        // cy.contains('option', 'Mentoria');
        // cy.contains('option', 'YouTube');
        cy.contains('button', 'Enviar').click();
        
      })
 })

 //Início do Curso e Resposta dos Exercícios da Terceira Lição (03.md)
 describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html');
  })
it('Exercício Inicial - Selecionar o Produto YouTube pelo texto e verifica se foi selecionado', () => {
  cy.get('select')
  .select('YouTube')
  .should('have.value', 'youtube');
})
it('Exercício Extra 1 - Selecionar um Produto por Seu Valor (MENTORIA)', () => {
  cy.get('[id="product"]')
  .select('mentoria')
  .should('have.value', 'mentoria');
  })
  it('Exercício Extra 2 - Selecionar o Produto Blog pelo Seu Índice', () => {
  cy.get('[id="product"]')
  .select(1)
  .should('have.value', 'blog');
  })

  //Início do Curso e Resposta dos Exercícios da Quarta Lição (04.md)
  it('Exercício - Marca Cada Tipo de Atendimento "Feedback"',() => {
    // cy.get('input[type="radio"]')
    // .check('feedback')
    // .should('be.checked');
    cy.get('input[type="radio"][value="feedback"]')
    .check()
    .should('be.checked');
  })
  it('Simulação para Checkbox Não Marcado/Selecionado',() => {
    cy.get('input[type="radio"][value="feedback"]')
    .check()
    .should('not.be.checked');
  })
  it('Exercício Extra - Marca Cada Tipo de Atendimento',() => {
    cy.get('input[type="radio"][value="ajuda"]')
    .check()
    .should('be.checked');
    cy.get('input[type="radio"][value="elogio"]')
    .check()
    .should('be.checked');
    cy.get('input[type="radio"][value="feedback"]')
    .check()
    .should('be.checked');
  })

  it('Exercício Extra Utilizando o .each() e cy.wrap() - Marca Cada Tipo de Atendimento',() => {
    cy.get('input[type="radio"]')
      .each((tipodoAtendimento) =>{
        cy.wrap(tipodoAtendimento)
         .check()
         .should('be.checked')
      })
  })

 }) 
 
   
       
        






