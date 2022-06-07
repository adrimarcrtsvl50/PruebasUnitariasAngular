import { usuarioIngresado } from './booleanos';



describe('Pruebas de booleanos',()=>{
    it('Debe de retornar true ',()=>{
        const res = usuarioIngresado();
       //expect(res).toBe(true);
        expect(res).toBeTruthy();//verdadero
        //expect(res).not.toBeTruthy();// negacion de verdadero
        //expect(res).toBeFalsy();// falso
     });

     
});
