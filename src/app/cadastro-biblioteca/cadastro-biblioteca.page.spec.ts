import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroBibliotecaPage } from './cadastro-biblioteca.page';

describe('CadastroBibliotecaPage', () => {
  let component: CadastroBibliotecaPage;
  let fixture: ComponentFixture<CadastroBibliotecaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroBibliotecaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroBibliotecaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
