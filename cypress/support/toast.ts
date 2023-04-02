// import { TOASTS } from '@constants';
import { colors } from '@theme';

export const checkInfoToast = (): void => {
	it(`Toast info view`, () => {
		cy.visit(`/iframe.html?id=toast--info`)
			.get('[data-test-id=toast-wrapper')
			.should('have.css', 'background-color')
			.and('be.colored', colors.purple);
	});

	it(`Toast info icon color`, () => {
		cy.visit(`/iframe.html?id=toast--info`)
			.get('[data-test-id=toast-icon')
			.should('have.css', 'fill')
			.and('be.colored', colors.white);
	});

	it(`Toast info title color`, () => {
		cy.visit(`/iframe.html?id=toast--info`)
			.get('[data-test-id=toast-title')
			.should('have.css', 'color')
			.and('be.colored', colors.white);
	});

	it(`Toast info text color`, () => {
		cy.visit(`/iframe.html?id=toast--info`)
			.get('[data-test-id=toast-text')
			.should('have.css', 'color')
			.and('be.colored', colors.white);
	});
};

export const checkWarningToast = (): void => {
	it(`Toast warning view`, () => {
		cy.visit(`/iframe.html?id=toast--warning`)
			.get('[data-test-id=toast-wrapper')
			.should('have.css', 'background-color')
			.and('be.colored', colors.yellow);
	});

	it(`Toast warning icon color`, () => {
		cy.visit(`/iframe.html?id=toast--warning`)
			.get('[data-test-id=toast-icon')
			.should('have.css', 'fill')
			.and('be.colored', colors.black);
	});

	it(`Toast warning title color`, () => {
		cy.visit(`/iframe.html?id=toast--warning`)
			.get('[data-test-id=toast-title')
			.should('have.css', 'color')
			.and('be.colored', colors.black);
	});

	it(`Toast warning text color`, () => {
		cy.visit(`/iframe.html?id=toast--warning`)
			.get('[data-test-id=toast-text')
			.should('have.css', 'color')
			.and('be.colored', colors.black);
	});
};

export const checkSuccessToast = (): void => {
	it(`Toast success view`, () => {
		cy.visit(`/iframe.html?id=toast--success`)
			.get('[data-test-id=toast-wrapper')
			.should('have.css', 'background-color')
			.and('be.colored', colors.green);
	});

	it(`Toast success icon color`, () => {
		cy.visit(`/iframe.html?id=toast--success`)
			.get('[data-test-id=toast-icon')
			.should('have.css', 'fill')
			.and('be.colored', colors.white);
	});

	it(`Toast success title color`, () => {
		cy.visit(`/iframe.html?id=toast--success`)
			.get('[data-test-id=toast-title')
			.should('have.css', 'color')
			.and('be.colored', colors.white);
	});

	it(`Toast success text color`, () => {
		cy.visit(`/iframe.html?id=toast--success`)
			.get('[data-test-id=toast-text')
			.should('have.css', 'color')
			.and('be.colored', colors.white);
	});
};

export const checkErrorToast = (): void => {
	it(`Toast error view`, () => {
		cy.visit(`/iframe.html?id=toast--error`)
			.get('[data-test-id=toast-wrapper')
			.should('have.css', 'background-color')
			.and('be.colored', colors.red);
	});

	it(`Toast error icon color`, () => {
		cy.visit(`/iframe.html?id=toast--error`)
			.get('[data-test-id=toast-icon')
			.should('have.css', 'fill')
			.and('be.colored', colors.white);
	});

	it(`Toast error title color`, () => {
		cy.visit(`/iframe.html?id=toast--error`)
			.get('[data-test-id=toast-title')
			.should('have.css', 'color')
			.and('be.colored', colors.white);
	});

	it(`Toast error text color`, () => {
		cy.visit(`/iframe.html?id=toast--error`)
			.get('[data-test-id=toast-text')
			.should('have.css', 'color')
			.and('be.colored', colors.white);
	});
};

export const checkToastContainerWrapperPositions = (): void => {
	it(`Check position top-right`, () => {
		cy.visit(`/iframe.html?id=toast-container--toast-container-story&args=position:top-right`)
			.get('[data-test-id=toast-button]')
			.click()
			.wait(0.2)
			.get('[data-test-id=toast-container-wrapper]')
			.should('have.css', 'top', '10px')
			.should('have.css', 'right', '10px');
	});

	it(`Check position top-left`, () => {
		cy.visit(`/iframe.html?id=toast-container--toast-container-story&args=position:top-left`)
			.get('[data-test-id=toast-button]')
			.click()
			.wait(0.2)
			.get('[data-test-id=toast-container-wrapper]')
			.should('have.css', 'top', '10px')
			.should('have.css', 'left', '10px');
	});

	it(`Check position bottom-left`, () => {
		cy.visit(`/iframe.html?id=toast-container--toast-container-story&args=position:bottom-left`)
			.get('[data-test-id=toast-button]')
			.click()
			.wait(0.2)
			.get('[data-test-id=toast-container-wrapper]')
			.should('have.css', 'bottom', '10px')
			.should('have.css', 'left', '10px');
	});

	it(`Check position bottom-right`, () => {
		cy.visit(`/iframe.html?id=toast-container--toast-container-story&args=position:bottom-right`)
			.get('[data-test-id=toast-button]')
			.click()
			.wait(0.2)
			.get('[data-test-id=toast-container-wrapper]')
			.should('have.css', 'bottom', '10px')
			.should('have.css', 'right', '10px');
	});
};

export const checkToastContainerMessage = (): void => {
	it(`Check message`, () => {
		cy.visit(`/iframe.html?id=toast-container--toast-container-story&args=message:Loremipsumtexttext`)
			.get('[data-test-id=toast-button]')
			.click()
			.wait(0.2)
			.get('[data-test-id=toast-text]')
			.contains('Loremipsumtexttext');
	});
};

export const checkToastContainerTitle = (): void => {
	it(`Check title`, () => {
		cy.visit(`/iframe.html?id=toast-container--toast-container-story&args=title:Loremipsumtexttext`)
			.get('[data-test-id=toast-button]')
			.click()
			.wait(0.2)
			.get('[data-test-id=toast-title]')
			.contains('Loremipsumtexttext');
	});
};

export const checkToastTypeChanging = (): void => {
	it(`Check type changing`, () => {
		cy.visit(`/iframe.html?id=toast-container--toast-container-story&args=toastType:info`)
			.get('[data-test-id=toast-button]')
			.click()
			.wait(0.2)
			.get('[data-test-id=toast-wrapper')
			.should('have.css', 'background-color')
			.and('be.colored', colors.purple)
			.visit(`/iframe.html?id=toast-container--toast-container-story&args=toastType:success`)
			.get('[data-test-id=toast-button]')
			.click()
			.wait(0.2)
			.get('[data-test-id=toast-wrapper')
			.should('have.css', 'background-color')
			.and('be.colored', colors.green)
			.visit(`/iframe.html?id=toast-container--toast-container-story&args=toastType:warning`)
			.get('[data-test-id=toast-button]')
			.click()
			.wait(0.2)
			.get('[data-test-id=toast-wrapper')
			.should('have.css', 'background-color')
			.and('be.colored', colors.yellow)
			.visit(`/iframe.html?id=toast-container--toast-container-story&args=toastType:error`)
			.get('[data-test-id=toast-button]')
			.click()
			.wait(0.2)
			.get('[data-test-id=toast-wrapper')
			.should('have.css', 'background-color')
			.and('be.colored', colors.red);
	});
};

export const checkToastDurations = (): void => {
	it(`Check live duration 400ms`, () => {
		cy.visit(`/iframe.html?id=toast-container--toast-container-story&args=duration:400`)
			.get('[data-test-id=toast-button]')
			.click()
			.get('[data-test-id=toast-wrapper')
			.should('exist')
			.get('[data-test-id=toast-wrapper')
			.wait(400)
			.should('not.exist');
	});
	it(`Check live duration 2500ms`, () => {
		cy.visit(`/iframe.html?id=toast-container--toast-container-story&args=duration:2500`)
			.get('[data-test-id=toast-button]')
			.click()
			.get('[data-test-id=toast-wrapper')
			.should('exist')
			.get('[data-test-id=toast-wrapper')
			.wait(2500)
			.should('not.exist');
	});
};

export const checkAnimation = (): void => {
	it(`Check animation slide`, () => {
		cy.visit(`/iframe.html?id=toast-container--toast-container-story&args=animation:slide`)
			.get('[data-test-id=toast-button]')
			.click()
			.get('[data-test-id=toast-wrapper')
			.should('have.css', 'animation-name', 'slide')
			.should('be.visible');
	});
	it(`Check animation fade`, () => {
		cy.visit(`/iframe.html?id=toast-container--toast-container-story&args=animation:fade`)
			.get('[data-test-id=toast-button]')
			.click()
			.get('[data-test-id=toast-wrapper')
			.should('have.css', 'animation-name', 'fade')
			.should('be.visible');
	});
};

export const checkCustomMargins = (): void => {
	it(`Check custom margins`, () => {
		cy.visit(`/iframe.html?id=toast-container--toast-container-story&args=margins:50`)
			.get('[data-test-id=toast-button]')
			.click()
			.wait(0.2)
			.get('[data-test-id=toast-container-wrapper]')
			.should('have.css', 'margin', '50px');
	});
};

export const checkManyToasts = (): void => {
	it(`Check many toasts`, () => {
		cy.visit(`/iframe.html?id=toast-container--toast-container-story&args=duration:1000`)
			.get('[data-test-id=toast-button]')
			.click()
			.get('[data-test-id=toast-button]')
			.click()
			.get('[data-test-id=toast-button]')
			.click()
			.get('[data-test-id=toast-button]')
			.click()
			.get('[data-test-id=toast-button]')
			.click()
			.get('[data-test-id=toast-button]')
			.click()
			.get('[data-test-id=toast-container-wrapper]')
			.find('[data-test-id=toast-wrapper]')
			.wait(0)
			.should('have.length', 3)
			.wait(1000)
			.get('[data-test-id=toast-wrapper]')
			.should('not.exist', 0);
	});
};

export const checkCustomBackgroundColor = (): void => {
	it(`Check custom BackgroundColor black	`, () => {
		cy.visit(`/iframe.html?id=toast-container--toast-container-story&args=backgroundColor:black`)
			.get('[data-test-id=toast-button]')
			.click()
			.get('[data-test-id=toast-wrapper]')
			.should('have.css', 'background-color')
			.and('be.colored', 'black');
	});

	it(`Check custom BackgroundColor green`, () => {
		cy.visit(`/iframe.html?id=toast-container--toast-container-story&args=backgroundColor:green`)
			.get('[data-test-id=toast-button]')
			.click()
			.get('[data-test-id=toast-wrapper]')
			.should('have.css', 'background-color')
			.and('be.colored', 'green');
	});

	it(`Check custom BackgroundColor yellow`, () => {
		cy.visit(`/iframe.html?id=toast-container--toast-container-story&args=backgroundColor:yellow`)
			.get('[data-test-id=toast-button]')
			.click()
			.get('[data-test-id=toast-wrapper]')
			.should('have.css', 'background-color')
			.and('be.colored', 'yellow');
	});
};

export const checkCustomTextColor = (): void => {
	it(`Check custom text color black`, () => {
		cy.visit(`/iframe.html?id=toast-container--toast-container-story&args=textColor:black`)
			.get('[data-test-id=toast-button]')
			.click()
			.get('[data-test-id=toast-icon')
			.should('have.css', 'fill')
			.and('be.colored', 'black')
			.get('[data-test-id=toast-title')
			.should('have.css', 'color')
			.and('be.colored', 'black')
			.get('[data-test-id=toast-text')
			.should('have.css', 'color')
			.and('be.colored', 'black');
	});

	it(`Check custom text color green`, () => {
		cy.visit(`/iframe.html?id=toast-container--toast-container-story&args=textColor:green`)
			.get('[data-test-id=toast-button]')
			.click()
			.get('[data-test-id=toast-icon')
			.should('have.css', 'fill')
			.and('be.colored', 'green')
			.get('[data-test-id=toast-title')
			.should('have.css', 'color')
			.and('be.colored', 'green')
			.get('[data-test-id=toast-text')
			.should('have.css', 'color')
			.and('be.colored', 'green');
	});

	it(`Check custom text color yellow`, () => {
		cy.visit(`/iframe.html?id=toast-container--toast-container-story&args=textColor:yellow`)
			.get('[data-test-id=toast-button]')
			.click()
			.get('[data-test-id=toast-icon')
			.should('have.css', 'fill')
			.and('be.colored', 'yellow')
			.get('[data-test-id=toast-title')
			.should('have.css', 'color')
			.and('be.colored', 'yellow')
			.get('[data-test-id=toast-text')
			.should('have.css', 'color')
			.and('be.colored', 'yellow');
	});
};
