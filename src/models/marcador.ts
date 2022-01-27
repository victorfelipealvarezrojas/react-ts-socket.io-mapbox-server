
export class Marcador {
    protected id: string;
    protected lon: string;
    protected lat: string;

    constructor(id: string, lon: string, lat: string) {
        this.id = id;
        this.lat = lat;
        this.lon = lon;
    }

    public get getId() {
        return this.id;
    }

    public get getLon() {
        return this.lon;
    }

    public get getLat() {
        return this.lat;
    }

}