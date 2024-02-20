describe('Website Puma', () => {
  // size 1366 x 768
  it('Positive Case', () => {
    cy.viewport(1366, 768)
    cy.visit('https://id.puma.com/in/account/login')
    cy.get('#login-form-email').type('seleketep1@yopmail.com')
    cy.get('input[name="loginPassword"]').type('WErkudoro99*')
    cy.get('.login-bottom-row > .btn').click()
  })

  it('Negative Case Email Not Registered', () => {
    cy.viewport(1366, 768)
    cy.visit('https://id.puma.com/in/account/login')
    cy.get('#login-form-email').type('seleketep1111@yopmail.com')
    cy.get('input[name="loginPassword"]').type('WErkudoro99*')
    cy.get('.login-bottom-row > .btn').click()
    cy.contains('Login atau kata sandi tidak valid. Harap diingat bahwa kata sandi peka terhadap huruf besar/kecil. Coba lagi.')
    cy.wait(2000)
  })

  it('Negative Case Wrong Password', () => {
    cy.viewport(1366, 768)
    cy.visit('https://id.puma.com/in/account/login')
    cy.get('#login-form-email').type('seleketep1@yopmail.com')
    cy.get('input[name="loginPassword"]').type('WErkudoro999*')
    cy.get('.login-bottom-row > .btn').click()
    cy.contains('Login atau kata sandi tidak valid. Harap diingat bahwa kata sandi peka terhadap huruf besar/kecil. Coba lagi.')
    cy.wait(2000)
  })
})


// Testing menggunakan iphone-8, ipad-2, dan 1366x768 screen
// const sizes = ['iphone-8', 'ipad-2', [1366, 768]]

// describe('Website Dafbin', () => {
//   sizes.forEach((size) => {
//     it(`Should display logo on ${size} screen`, () => {
//       if (Cypress._.isArray(size)) {
//         cy.viewport(size[0], size[1])
//       } else {
//         cy.viewport(size)
//       }

//       cy.visit('https://dafbinikiki.netlify.app/')
//       cy.get('input[name="Email"]').type('seleketep5@yopmail.com')
//       cy.get('input[name="Kata sandi"]').type('Staging12345*')
//       cy.get('.border-2').click()
//       cy.contains('Ahli Data').click()
//       cy.get('.text-semibold-heading4')      
//     })
//   })
// })