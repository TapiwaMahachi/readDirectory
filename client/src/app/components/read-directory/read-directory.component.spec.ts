import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadDirectoryComponent } from './read-directory.component';

describe('ReadDirectoryComponent', () => {
  let component: ReadDirectoryComponent;
  let fixture: ComponentFixture<ReadDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadDirectoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
