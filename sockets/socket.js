const {io} = require('../index');



io.on('connection', client => {
    console.log('Cliente conectado');
    client.on('disconnect', ()=>{
        console.log('Cliente desconectado');
    });
    client.on('mensaje', (payload)=>{

        if (typeof payload.peso === 'string' && payload.peso.trim() !== '') {
            console.log(`Peso: ${payload.peso}`);
            io.emit('mensaje', {peso: payload.peso});
        }
        
    });
});