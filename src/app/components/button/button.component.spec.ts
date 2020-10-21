import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button.component';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
      imports: [MatButtonModule],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.nativeElement.querySelector('button').textContent = 'Click me';
  });

  it('should render with the text Click me', () => {
    expect(fixture.nativeElement.querySelector('button').textContent).toEqual(
      'Click me'
    );
  });

  it('should render with danger style (red)', () => {
    component.style = 'danger';
    fixture.autoDetectChanges();
    expect(
      fixture.nativeElement
        .querySelector('button')
        .classList.contains('btn-danger')
    ).toBeTrue();
  });
});
