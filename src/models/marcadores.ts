import { Marcador } from "./marcador";


export class Marcadores {
    public activos:any;

    constructor() {
        this.activos ={}
    }

    public get getActivos(): any{
        return this.activos;
    }

    agregarMarcador(marcador: any): any {
        return this.activos[marcador.id] = marcador ;
    }

    removerMarcador(id: any): boolean {
        return delete this.activos[id];
    }

    actualizarMarcador( marcador: any): any {
        return this.activos[marcador.id] = marcador;
    }
}