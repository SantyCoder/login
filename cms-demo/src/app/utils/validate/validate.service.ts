import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  static getValidatorErrorMessage(validatorName: string, validatorRule?: any) {
    let config = {
      'required': 'Campo obligatorio',
      'email': 'No es un formato de correo válido',
      'customEmail': 'No es un formato de correo válido',
      'minlength': `Debe contener mínimo ${validatorRule.requiredLength} carácteres`,
      'pattern': 'El campo no tiene un formato válido',
      'maxlength': 'Está excediendo el máximo número de caracteres permitidos',
      'equalTo': 'Los valores no coinciden',
      'whitespace': 'No se permiten espacios',
      'password': 'La contraseña debe incluir mínimo una mayúscula y un número; mínimo 8 y máximo 12 caracteres',
      'empty': 'El campo no tiene contenido',
      'onlyNumbers': 'Sólo se permiten números',
      'onlyDecimals': 'Sólo se permiten decimales',
      'min': `El número no puede ser menor a ${validatorRule.min}`,
      'dateGreaterThan': 'La fecha final debe ser mayor a fecha inicial',
      'dateSmallerThan': 'La fecha inicial debe ser menor a fecha final',
      'dateRange': 'La fecha final no debe de ser mayor a 2 meses'
    }

    return config[validatorName];
  }

  static noWhitespace(control: FormControl) {
    let isValid = control.value.match(/^\S*$/);
    return isValid ? null : { 'whitespace': true };
  }

  static email(control: FormControl) {
    let isValid = control.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return isValid ? null : { 'customEmail': true };
  }

  static password(control: FormControl) {
    //^[a-zA-Z0-9!@#$&()-`.+,/\"]*$
    let isValid = control.value.match(/^(?=.{8,12}$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).[a-zA-Z0-9!@#$&()-`.+,/\"]*$/);
    return isValid ? null : { 'password': true };
  }

  static noEmpty(control: FormControl) {
    let isValid = control.value.replace(/[\n\r\s]+/, '').length;
    return isValid > 0 ? null : { 'empty': true };
  }

  static onlyNumbers(control: FormControl) {
    const flag = control['value'];
    if (flag !== null && flag['length'] !== undefined && flag['length'] > 0) {
      let value = control.value.toString();
      let isValid = value.match(/^\d+$/);
      return isValid ? null : { 'onlyNumbers': true };
    }
  }

  static onlyDecimals(control: FormControl) {
    const flag = control['value'];
    if (flag !== null && flag['length'] !== undefined && flag['length'] > 0) {
      let value = control.value.toString();
      let isValid = value.match(/^\d+(\.\d{1,4})?$/);
      return isValid ? null : { 'onlyDecimals': true };
    }
  }

  static emptyFile(control: any) {
    let isValid = false;
    return isValid ? null : { 'emptyFile': true };
  }

  static onlyIpAddress(control: any) {
    let value = control.value.toString();
    let isValid = value.match(/((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/);
    return isValid ? null : { 'onlyIpAddress': true };
  }
  
}
