/// <reference types="cypress" />

import chaiColors from 'chai-colors';

import {
	checkAnimation,
	checkCustomBackgroundColor,
	checkCustomMargins,
	checkCustomTextColor,
	checkErrorToast,
	checkInfoToast,
	checkManyToasts,
	checkSuccessToast,
	checkToastContainerMessage,
	checkToastContainerTitle,
	checkToastContainerWrapperPositions,
	checkToastDurations,
	checkToastTypeChanging,
	checkWarningToast,
} from '../support/toast';

chai.use(chaiColors);

describe('Check toasts', () => {
	checkInfoToast();
	checkWarningToast();
	checkSuccessToast();
	checkErrorToast();
});

describe('Check Toast Container', () => {
	checkToastContainerWrapperPositions();
	checkToastContainerMessage();
	checkToastContainerTitle();
	checkToastTypeChanging();
	checkToastDurations();
	checkAnimation();
	checkCustomMargins();
	checkManyToasts();
	checkCustomBackgroundColor();
	checkCustomTextColor();
});
