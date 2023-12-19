import { TestBed } from '@angular/core/testing';
import { DemoLibComponent } from './demo-lib.component';

describe(DemoLibComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(DemoLibComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(DemoLibComponent);
  });
});
