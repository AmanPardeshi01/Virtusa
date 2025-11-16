import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';


describe('Component Testing', () => {

    let component: CounterComponent;
    let fixture: ComponentFixture<CounterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CounterComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(CounterComponent);
        component = fixture.componentInstance;
    });

    it('should display initial count 0', () => {
        fixture.detectChanges();
        const h3 = fixture.nativeElement.querySelector('h3');
        expect(h3.textContent).toBe('0');
    });

    it('should increment count on click', () => {
        const button = fixture.nativeElement.querySelector('button');
        button.click();

        fixture.detectChanges();

        const h3 = fixture.nativeElement.querySelector('h3');
        expect(h3.textContent).toBe('1');
    });

});