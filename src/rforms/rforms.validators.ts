
import { AbstractControl , ValidationErrors } from '@angular/forms';

export class Validator 
{
    static containMax(control : AbstractControl) : ValidationErrors | null
    {
     if((control.value as string).length>=5)
        return ({
            containMax:true
        });
    return null;
    }
}