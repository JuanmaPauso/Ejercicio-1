const EventEmitter = require('./events');

const later = require('later');
// Usar zona horaria local:
later.date.localTime();


class Programador extends EventEmitter {
    constructor() {
        super();

        const configuracion = [{
                hora: "07:00",
                temperatura: 22
            },
            {
                hora: "08:30",
                temperatura: 18
            },
            {
                hora: "18:30",
                temperatura: 22
            },
            {
                hora: "23:00",
                temperatura: 20
            }
        ];
        this.programacion = configuracion;

        for (const programa of this.programacion) {
            const sched = later.parse.text(`at ${programa.hora}`);
            later.setInterval(() => {
                console.log(`Hora programada: ${programa.hora}, cambio de la temperatura ideal a: ${programa.temperatura}ºC`);
                this.emit('ideal', programa.temperatura);
            }, sched)
        }


    }

}

exports = module.exports = Programador;