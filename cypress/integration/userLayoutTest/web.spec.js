
context('Layout version WEB', () => {
	beforeEach(() => {
		cy.visit('localhost:8087');
	})
	it('El activador del menu movil oculto', () => {
		it('Verficar este oculto', () => {
			cy.get('[data-cy=activator]')
				.should('have.css', 'display')
				.and('eq', 'none');
		})
	})
	it('Existe el componente', () => {
		cy.get('[data-cy=user-profile-layout]')
			.should('exist')
			.children()
			.should('have.length', 2)
			.eq(0)
			.should('have.class', 'container-layout')
			.children()
			.should('have.length', 2)
			.each((child, index) => {
				if (index === 0) {
					expect(child[0].localName).to.be.equal('aside');
				} else {
					expect(child[0].localName).to.be.equal('section');
				}
			});
	})
	it('Accionar botones del menu', () => {
		cy.fixture('menuData').then(({ menuData }) => {
			cy.get('[data-cy=user-profile-layout]')
				.children()
				.eq(0)
				.children()
				.eq(0)
				.children()
				.children()
				.each((li, index) => {
					expect(li[0].localName).to.be.equal('li');
					cy.wrap(li).children()
						.eq(0)
						.click();
					cy.get('[data-cy=main-content-container]')
						.children()
						.eq(0)
						.should('contain', menuData[index].text);
				})
		});
	});
});