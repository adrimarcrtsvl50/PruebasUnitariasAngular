import { Jugador2 } from './jugardor2';



describe('Jugador 2 Emit', () => {
    let jugador: Jugador2
    beforeEach(() => { jugador = new Jugador2(); });

    it('Debe de emitir un evento cuando recibir daño', () => {

        let nuevoHP = 0;
        jugador.hpCambia.subscribe(hp => {
            nuevoHP = hp
        })
        jugador.recibeDanio(1000);
        expect(nuevoHP).toBe(0);
    });

    it('Debe de emitir un evento cuando recibir daño y sobrevivir si es menos de 100', () => {

        let nuevoHP = 0;
        jugador.hpCambia.subscribe(hp =>nuevoHP = hp)
        jugador.recibeDanio(50);
        expect(nuevoHP).toBe(50);
    });

});