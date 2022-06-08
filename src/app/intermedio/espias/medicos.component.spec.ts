import { EMPTY, from, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null as any);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
        
    });


    it('Init: Debe de cargar los médicos', () => {

        const medicos = ['medico1', 'medico2', 'medico3'];
         //espia al servicio y cuando alguien llame a getMedicos ejecuta la funcion del callfake
        spyOn( servicio, 'getMedicos' ).and.callFake( () => {

            return from( [  medicos  ] );
            
        });

        //llamamos al ngOnInit, ya que por defecto no se carga, solo se carga lo que hay dentro del constructor
        componente.ngOnInit();

        expect( componente.medicos.length ).toBeGreaterThan(0);//mayor que 0

    });


    it( 'Debe de llamar al servidor para agregar un médico', () => {

        
        const espia = spyOn(servicio, 'agregarMedico').and.callFake(() => EMPTY);//regresar un observable vacio
        componente.agregarMedico();

        expect( espia ).toHaveBeenCalled();//que han llamado

    });


    it( 'Debe de agregar un nuevo médico al arreglo de médicos', () => {

        const medico = { id: 1, nombre: 'Juan' };//generar para enviar objeto a base de datos

        spyOn( servicio, 'agregarMedico' )
                .and.returnValue( from( [  medico  ] )   );//llamar regresar un valor

       componente.agregarMedico();
       //expect( componente.medicos.length ).toBe(1);//logitud del arreglo
       expect( componente.medicos.indexOf( medico ) ).toBeGreaterThanOrEqual(0);

    });

    it( 'Si falla la adicion, la propiedad mensajeError, debe ser igual al error del servicio', () => { 

        const miError = 'Nose pudo agregar el médico';

        spyOn(servicio, 'agregarMedico').and
      .returnValue( throwError(() => miError) );

        componente.agregarMedico();

        expect( componente.mensajeError ).toBe( miError );
    });


    it( 'Debe de llamar al servidor para borrar un médico', () => {

        spyOn( window, 'confirm' ).and.returnValue(true);


        const espia = spyOn(servicio, 'borrarMedico').and
      .returnValue(EMPTY);

       componente.borrarMedico('1');

       expect( espia ).toHaveBeenCalledWith('1');//llamado con un argumento

    });

    it( 'NO debe de llamar al servidor para borrar un médico', () => {

        spyOn( window, 'confirm' ).and.returnValue(false);


        const espia = spyOn(servicio, 'borrarMedico').and
      .returnValue(EMPTY);

       componente.borrarMedico('1');

       expect( espia ).not.toHaveBeenCalledWith('1');

    });



});
