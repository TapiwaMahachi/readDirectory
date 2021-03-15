import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirentItemComponent } from './dirent-item.component';

describe('DirentItemComponent', () => {
  let component: DirentItemComponent;
  let fixture: ComponentFixture<DirentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirentItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
