import { FormularioRegister } from "./formulario";
import { FormBuilder } from "@angular/forms";



describe('Formulario', () => {
    
    let componente:FormularioRegister;
    beforeEach(()=>{
        componente = new FormularioRegister(new FormBuilder());
    })
    it('Debe crear un formulario con dos campos, email y pasword', () => {

       
        expect(componente.form.contains('email')).toBeTruthy();
        expect(componente.form.contains('password')).toBeTruthy();
    });

    it('El email debe de ser obligatorio',()=>{
        const control = componente.form.get('email');
        control?.setValue('');
        expect(control?.valid).toBeFalsy();//ese campo es falsa
    });

    it('El email debe de ser un correo válido',()=>{
        const control = componente.form.get('email');
        control?.setValue('fernado@gmail.com');
        expect(control?.valid).toBeTruthy();//ese campo es verdadero
    });

});