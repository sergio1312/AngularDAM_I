import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesAdminComponent } from './opciones-admin.component';

describe('OpcionesAdminComponent', () => {
  let component: OpcionesAdminComponent;
  let fixture: ComponentFixture<OpcionesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcionesAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcionesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
