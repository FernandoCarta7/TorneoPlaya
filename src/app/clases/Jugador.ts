export class Jugador {
    id_jugador: number;
    primer_nombre: String;
    primer_apellido: String;
    segundo_nombre: String;
    segundo_apellido: String;
    fecha_nacimiento : Date;
    id_equipo : number;

    constructor(
        private id : number, 
        private nombre_primer : string, 
        private nombre_segundo : string,
        private apellido_primer : string,
        private apellido_segundo : string,
        private fecha_nac : Date,
        private equipo_id : number
    ){
        this.id_jugador = id;
        this.primer_nombre = nombre_primer;
        this.primer_apellido = apellido_primer;
        this.segundo_nombre = nombre_segundo;
        this.segundo_apellido = apellido_segundo;
        this.fecha_nacimiento = fecha_nac;
        this.id_equipo = equipo_id;
    }
}