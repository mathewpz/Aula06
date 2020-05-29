class Contato{
    constructor(id, nome, numero, imagemURI, data, lat, lng){
        this.id = id;
        this.nome = nome;
        this.numero = numero;
        this.imagemURI = imagemURI;
        this.lat = lat;
        this.lng = lng;
        this.data = new Date;
    }
}
export default Contato;