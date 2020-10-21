import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextComponent } from './input-text.component';

describe('InputTextComponent', () => {
  let component: InputTextComponent;
  let fixture: ComponentFixture<InputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputTextComponent],
      imports: [MatInputModule, BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextComponent);
    component = fixture.componentInstance;
    component.value = null;
    fixture.detectChanges();
  });

  it('should render with placeholder "Input text"', () => {
    component.placeholder = 'Input text';
    fixture.autoDetectChanges();
    expect(
      fixture.nativeElement.querySelector('input').getAttribute('placeholder')
    ).toEqual('Input text');
  });

  it('should render with input value "Hello world"', () => {
    component.value = 'Hello world';
    fixture.autoDetectChanges();
    expect(fixture.nativeElement.querySelector('input').value).toEqual(
      'Hello world'
    );
  });
});
