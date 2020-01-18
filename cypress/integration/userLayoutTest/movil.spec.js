context('Layout version MOVIL', () => {
	beforeEach(() => {
		cy.visit('localhost:8087');
		cy.viewport(550, 700);
	})
	it('El activador del menu movil se muestra', () => {
		cy.get('[data-cy=activator]')
			.should('exist')
			.should('have.css', 'display')
			.and('eq', 'inline-block');
	})
	it('Menu web Oculto', () => {
		cy.get('[data-cy=menu-web]')
			.parent()
			.should('have.attr', 'style')
			.and('eq', 'display: none;');
	})
	it('Mostrar / Ocultar menu movil', () => {
		cy.fixture('menuData').then(({ menuData }) => {
			cy.get('[data-cy=activator]')
				.click();
			cy.get('[data-cy=menu-movil]')
				.should('exist')
				.parent()
				.should('have.class', 'show-menu-movil')
				.children()
				.eq(0)
				.should('have.class', 'wrapper-menu-movil')
				.children()
				.eq(1)
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
				});
			})
			cy.get('[data-cy=menu-movil]')
				.children()
				.eq(0)
				.click();
			cy.get('[data-cy=menu-movil]')
				.should('exist')
				.parent()
				.should('not.have.class', 'show-menu-movil');
	})
});