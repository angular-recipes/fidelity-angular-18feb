import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let componentDOM;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    componentDOM = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have counter as 0 initially', () => {
    let span = componentDOM.querySelector('span');
    expect(span.innerHTML).toBe('0');
    expect(component.counter).toBe(0);
  });

  it('sould increment properly', () => {
    let span = componentDOM.querySelector('span');
    // let btn = componentDOM.querySelector('button');
    // btn.click()
    component.increment();
    fixture.detectChanges();
    expect(span.innerHTML).toBe('1');
    expect(component.counter).toBe(1);
  });
});
