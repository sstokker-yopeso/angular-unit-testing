import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactComponent,
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(ContactComponent);
      component = fixture.componentInstance; // ContactComponent test instance
      //el = fixture.debugElement.query(By.css('form')).nativeElement;
    });
  }));

  it(`should have as text 'Contact Form'`, async(() => {
    expect(component.text).toEqual('Contact Form');
  }));

  it('should set submitted to true if onSubmit is called', async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTrue();
  }));

  it('form should be invalid if the fields are empty', async(() => {
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['text'].setValue('');
    expect(component.contactForm.valid).toBeFalse();
  }));

  it('form should be valid if the fields are set properly', async(() => {
    component.contactForm.controls['email'].setValue('maggot@brain.com');
    component.contactForm.controls['name'].setValue('Maggot Brain');
    component.contactForm.controls['text'].setValue('The lunatic is on the grass');
    expect(component.contactForm.valid).toBeTrue();
  }));

  it('should NOT call the onSubmit method if the button is clicked with default (empty) fields', async(() => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }));

  it('should call the onSubmit method if the button is clicked with valid fields', async(() => {
    component.contactForm.controls['email'].setValue('maggot@brain.com');
    component.contactForm.controls['name'].setValue('Maggot Brain');
    component.contactForm.controls['text'].setValue('The lunatic is on the grass');
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalled();
  }));

});
