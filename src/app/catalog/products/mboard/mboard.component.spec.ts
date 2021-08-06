import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MboardComponent } from './mboard.component';

describe('MboardComponent', () => {
  let component: MboardComponent;
  let fixture: ComponentFixture<MboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
