import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirentComponent } from './dirent.component';

describe('DirentComponent', () => {
  let component: DirentComponent;
  let fixture: ComponentFixture<DirentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
