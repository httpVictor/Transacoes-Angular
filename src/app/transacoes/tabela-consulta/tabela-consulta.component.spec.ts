import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaConsultaComponent } from './tabela-consulta.component';

describe('TabelaConsultaComponent', () => {
  let component: TabelaConsultaComponent;
  let fixture: ComponentFixture<TabelaConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabelaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
