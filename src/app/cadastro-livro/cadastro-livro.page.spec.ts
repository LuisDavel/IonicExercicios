import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroLivroPage } from './cadastro-livro.page';

describe('CadastroLivroPage', () => {
  let component: CadastroLivroPage;
  let fixture: ComponentFixture<CadastroLivroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroLivroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroLivroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
