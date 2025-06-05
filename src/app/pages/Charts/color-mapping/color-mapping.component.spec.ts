import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorMappingComponent } from './color-mapping.component';

describe('ColorMappingComponent', () => {
  let component: ColorMappingComponent;
  let fixture: ComponentFixture<ColorMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorMappingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
