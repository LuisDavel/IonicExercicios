import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaLivroPage } from './lista-livro.page';

describe('ListaLivroPage', () => {
  let component: ListaLivroPage;
  let fixture: ComponentFixture<ListaLivroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaLivroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaLivroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
