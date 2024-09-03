import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MustComponent } from './must.component';

describe('MustComponent', () => {
  let component: MustComponent;
  let fixture: ComponentFixture<MustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MustComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
