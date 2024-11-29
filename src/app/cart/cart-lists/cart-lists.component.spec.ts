import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartListsComponent } from './cart-lists.component';

describe('CartListsComponent', () => {
  let component: CartListsComponent;
  let fixture: ComponentFixture<CartListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartListsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
