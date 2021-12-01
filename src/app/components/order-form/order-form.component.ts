import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from 'src/app/services/cart.service';
import { CompletedDialogComponent } from '../dialogs/completed-dialog/completed-dialog.component';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.less']
})
export class OrderFormComponent implements OnInit {

  @Output() resetCartData = new EventEmitter<void>();
  public orderForm: FormGroup;
  public emailPrefix = "email:";
  public confirmEmailPrefix = "confirm email:";
  public nameSurnamePrefix = "name / surname:";
  public nameSurnameMax = 35;
  public buttonText = "Order";
  private emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  /**
   * @nameSurnamePattern support validation for next names:
   * Jhon Smith,
   * Jhon D'Largi,
   * Jhon Dou-Smith,
   * Jhon Dou Smit,
   * Gector Jhon-Hauzen,
   * Matias d'Arras,
   * Martin Luther King,
   * Martin Luther King Jr.,
   * Nikolajs II
   */
  private nameSurnamePattern = /^([a-zA-Z]{2,}\s([a-zA-Z]{1,}'?-?[a-zA-Z]{2,}|[a-zA-Z]{1,})((\s[a-zA-Z]{1,})?(\s[a-zA-Z]{1,}\.?))?)$/;

  constructor(private fb: FormBuilder, private dialog: MatDialog, private cartService: CartService) { }

  public ngOnInit(): void {
    this.reactiveForm();
  }

  public onOrder(): void {
    if (this.orderForm.valid) {
      this.cartService.resetCartData();
      this.resetCartData.emit();
      this.dialog.open(CompletedDialogComponent, { height: '320px' });
    }
  }

  private confirmEmail(control: AbstractControl): ValidationErrors | null {
    if (control.value['email'] === control.value['confirmEmail']) {
      control.get('confirmEmail')?.setErrors(null);
    } else {
      control.get('confirmEmail')?.setErrors({ 'mismatch': true });
    }
    return null;
  }

  private reactiveForm(): void {
    this.orderForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      confirmEmail: ['', [Validators.required]],
      nameSurname: ['', [Validators.required, Validators.maxLength(this.nameSurnameMax), Validators.pattern(this.nameSurnamePattern)]]
    }, { validators: this.confirmEmail });
  }

}
