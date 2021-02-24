class EventEmitter {
    constructor() {

        this.escuchadores = {};
    }

    on(evento, suscriptor) {
        if (!this.escuchadores[evento]) {
            this.escuchadores[evento] = [];
        }

        this.escuchadores[evento].push(suscriptor);


    }

    emit(evento, argumentos) {
        let suscriptores = this.escuchadores[evento];

        suscriptores.forEach((suscriptor) => {
            suscriptor(argumentos);
        });
    }
}

exports = module.exports = EventEmitter;