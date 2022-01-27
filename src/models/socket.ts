import { Marcador } from "./marcador";
import { Marcadores } from "./marcadores";


export class socketClass {
    private io: any;
    private marcadores: Marcadores

    constructor(io: any) {
        this.io = io;
        this.marcadores = new Marcadores;
        this.socketEvents();
    }

    socketEvents() {
        this.io.on('connection', (socketClient: any) => {
            socketClient.emit('marcadores-activos', this.marcadores.getActivos);

            socketClient.on('marcador-nuevo', (marcador: any) => {
                this.marcadores.agregarMarcador(marcador);
                socketClient.broadcast.emit('marcador-nuevo', marcador);
            });

            socketClient.on('marcador-actualizado', (marcador: Marcador) => {
                this.marcadores.actualizarMarcador( marcador);
                socketClient.broadcast.emit('marcador-actualizado', marcador);
            });
        });
    }
}  