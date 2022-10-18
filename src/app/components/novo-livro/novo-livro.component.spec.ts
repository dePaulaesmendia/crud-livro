import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoLivroComponent } from './novo-livro.component';

describe('NovoLivroComponent', () => {
  let component: NovoLivroComponent;
  let fixture: ComponentFixture<NovoLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoLivroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
