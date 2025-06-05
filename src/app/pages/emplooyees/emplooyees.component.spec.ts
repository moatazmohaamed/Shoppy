import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplooyeesComponent } from './emplooyees.component';

describe('EmplooyeesComponent', () => {
  let component: EmplooyeesComponent;
  let fixture: ComponentFixture<EmplooyeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmplooyeesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplooyeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
