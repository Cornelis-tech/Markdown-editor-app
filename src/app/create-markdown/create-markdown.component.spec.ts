import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMarkdownComponent } from './create-markdown.component';

describe('CreateMarkdownComponent', () => {
  let component: CreateMarkdownComponent;
  let fixture: ComponentFixture<CreateMarkdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMarkdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
