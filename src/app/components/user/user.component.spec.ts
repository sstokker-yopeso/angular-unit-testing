import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserComponent } from './user.component';
import { UserServiceMock } from '../../mocks/user.service.mock';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserComponent,
      ],
      providers: [
        //// HOW TO MOCK "UserService"?
        //{ provide: UserService, useClass: UserServiceMock },
      ],
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(UserComponent);
      component = fixture.componentInstance; // UserComponent test instance
    });
  }));

  it('should have at least one user', async(() => {
    expect(component.users.length).toBeGreaterThanOrEqual(1);
  }));

  it(`html should render 'Lolec' as the first user`, async(() => {
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('ul li');
    expect(el.innerText).toContain('Lolec');
  }));

});
