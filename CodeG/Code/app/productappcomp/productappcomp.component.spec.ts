import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductappcompComponent } from './productappcomp.component';

describe('ProductappcompComponent', () => {
  let component: ProductappcompComponent;
  let fixture: ComponentFixture<ProductappcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductappcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductappcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
