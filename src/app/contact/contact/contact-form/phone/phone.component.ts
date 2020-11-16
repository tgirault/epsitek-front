import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, Inject, Input, OnDestroy, Optional, Self, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, NgControl, Validators } from '@angular/forms';
import { MatFormField, MatFormFieldControl, MAT_FORM_FIELD } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { PhoneNumber } from './model/phone-number.data';

@Component({
  selector: 'app-phone-number-input',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
  providers: [{ provide: MatFormFieldControl, useExisting: PhoneComponent }]
})
export class PhoneComponent implements ControlValueAccessor, MatFormFieldControl<PhoneNumber>, OnDestroy {
  static ngAcceptInputTypeDisabled: boolean | string | null | undefined;
  static ngAcceptInputTypeRequired: boolean | string | null | undefined;
  static nextId = 0;

  /**
   * Value attribute.
   */
  @Input()
  get value(): PhoneNumber | null {
    if (this.parts.valid) {
      const {
        value: { countryPrefix, phoneNumber }
      } = this.parts;
      return new PhoneNumber(countryPrefix, phoneNumber);
    }
    return null;
  }
  set value(tel: PhoneNumber | null) {
    const { countryPrefix, phoneNumber } = tel || new PhoneNumber('+33', '');
    this.parts.setValue({ countryPrefix, phoneNumber });
    this.stateChanges.next();
  }

  /**
   * Placeholder attribute.
   */
  @Input()
  get placeholder(): string {
    return this.placeHolder;
  }
  set placeholder(value: string) {
    this.placeHolder = value;
    this.stateChanges.next();
  }
  private placeHolder: string;

  /**
   * Required attribute.
   */
  @Input()
  get required(): boolean {
    return this.isRequired;
  }

  set required(value: boolean) {
    this.isRequired = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private isRequired = false;

  /**
   * Disabled attribute.
   */
  @Input()
  get disabled(): boolean {
    return this.isDisabled;
  }

  set disabled(value: boolean) {
    this.isDisabled = coerceBooleanProperty(value);
    this.isDisabled ? this.parts.disable() : this.parts.enable();
    this.stateChanges.next();
  }
  private isDisabled = false;

  /**
   * Champ préfix.
   */
  @ViewChild('countryPrefix') prefixInput: HTMLInputElement;

  /**
   * Champ numéro de téléphone.
   */
  @ViewChild('phoneNumber') phoneNumberInput: HTMLInputElement;

  parts: FormGroup;
  stateChanges = new Subject<void>();
  focused = false;
  controlType = 'phone-number-input';
  id = `phone-number-input-${PhoneComponent.nextId++}`;
  onChange = (_: any) => { };
  onTouched = () => { };

  /**
   * Constructeur du composant.
   * @param formBuilder un builder de formulaire
   * @param focusMonitor le détecteur de focus
   * @param elementRef la référence de l'élément
   * @param formField le champ du formulaire
   * @param ngControl les contrôles du champ
   */
  constructor(
    formBuilder: FormBuilder,
    private focusMonitor: FocusMonitor,
    private elementRef: ElementRef<HTMLElement>,
    @Optional() @Inject(MAT_FORM_FIELD) public formField: MatFormField,
    @Optional() @Self() public ngControl: NgControl) {

    // Validateur des parties du numéro de téléphone
    this.parts = formBuilder.group({
      countryPrefix: [
        null,
        [Validators.required, Validators.pattern('^[+][0-9]{2}$')]
      ],
      phoneNumber: [
        null,
        [Validators.required, Validators.pattern('^[0-9]{10}$')]
      ]
    });

    focusMonitor.monitor(elementRef, true).subscribe(origin => {
      if (this.focused && !origin) {
        this.onTouched();
      }
      this.focused = !!origin;
      this.stateChanges.next();
    });

    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  /**
   * Le champ est-il vide ?
   */
  get empty(): boolean {
    const {
      value: { countryPrefix, phoneNumber }
    } = this.parts;

    return !countryPrefix && !phoneNumber;
  }

  /**
   * Le label doit-il être au dessus du champ ?
   */
  get shouldLabelFloat(): boolean {
    return this.focused || !this.empty;
  }

  /**
   * Le champ est-il en erreur ?
   */
  get errorState(): boolean {
    return this.parts.invalid && this.parts.dirty;
  }

  /**
   * Placer le curseur sur le prochain élément si le contrôle est valide.
   * @param control un contrôle
   * @param nextElement le prochain élément HTML
   */
  handleInput(control: AbstractControl, nextElement?: HTMLInputElement): void {
    this.autoFocusNext(control, nextElement);
    this.onChange(this.value);
  }

  /**
   * Placer le curseur dans l'élément suivant.
   * @param control un contrôle
   * @param nextElement l'élément suivant
   */
  autoFocusNext(control: AbstractControl, nextElement?: HTMLInputElement): void {
    if (!control.errors && nextElement) {
      this.focusMonitor.focusVia(nextElement, 'program');
    }
  }

  /**
   * Placer le curseur dans l'élément précédent.
   * @param control un contrôle
   * @param prevElement l'élément précédent
   */
  autoFocusPrev(control: AbstractControl, prevElement: HTMLInputElement): void {
    if (control.value.length < 1) {
      this.focusMonitor.focusVia(prevElement, 'program');
    }
  }

  /**
   * Action à la destruction du composant.
   */
  ngOnDestroy(): void {
    this.stateChanges.complete();
    this.focusMonitor.stopMonitoring(this.elementRef);
  }

  /**
   * Modifier la valeur de l'attribut aria-describedby.
   * @param ids une liste d'identifiants
   */
  setDescribedByIds(ids: string[]): void {
    const controlElement = this.elementRef.nativeElement.querySelector('.phone-input-container');
    controlElement.setAttribute('aria-describedby', ids.join(' '));
  }

  /**
   * Changer le statut activé/désactivé du composant.
   * @param isDisabled indicateur désactivé
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /**
   * Positionner le curseur dans le bon champ.
   */
  onContainerClick(): void {
    if (this.parts.controls.phoneNumber.valid) {
      this.focusMonitor.focusVia(this.phoneNumberInput, 'program');
    } else if (this.parts.controls.countryPrefix.valid) {
      this.focusMonitor.focusVia(this.phoneNumberInput, 'program');
    } else {
      this.focusMonitor.focusVia(this.prefixInput, 'program');
    }
  }

  /**
   * Ecrire une valeur.
   * @param phoneNumber un numéro de téléphone
   */
  writeValue(phoneNumber: PhoneNumber | null): void {
    this.value = phoneNumber;
  }

  /**
   * Enregistrer sur l'évènement OnChange.
   * @param fn une fonction
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Enregistrer sur l'évènement OnTouched.
   * @param fn une fonction
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
