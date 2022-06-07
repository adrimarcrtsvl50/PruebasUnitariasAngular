import { obtenerRobots } from './arreglos';




describe('Pruebas de arreglos',()=>{
    it('Debe de retornar al menos 3 robots ',()=>{
        const res = obtenerRobots();
       
       // expect(res.length).toBe(3);//igual a 3 
       expect(res.length).toBeGreaterThanOrEqual(3);//mayor o igual de 3
     });
     it('Debe de existir MegaMan y Ultron ',()=>{
        const res = obtenerRobots();
       
       
       expect(res).toContain('MegaMan');//igual de la palabra de arreglo
       expect(res).toContain('Ultron');//igual de la palabra de arreglo
     });
     
});
