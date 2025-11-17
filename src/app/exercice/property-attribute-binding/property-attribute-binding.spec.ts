import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyAttributeBinding } from './property-attribute-binding';

describe('PropertyAttributeBinding', () => {
  let component: PropertyAttributeBinding;
  let fixture: ComponentFixture<PropertyAttributeBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyAttributeBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyAttributeBinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
