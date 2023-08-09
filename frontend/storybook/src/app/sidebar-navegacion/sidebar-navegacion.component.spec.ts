import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavegacionComponent } from './sidebar-navegacion.component';

describe('SidebarNavegacionComponent', () => {
  let component: SidebarNavegacionComponent;
  let fixture: ComponentFixture<SidebarNavegacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarNavegacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
