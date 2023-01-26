

module.exports = function AuthMediator(opts) {

    const {
        svcTalos
    } = opts;


    async function test({ number, service }) {
        let account = 'hello';

      //  number = sanitizePhoneNumber({ phone: number });

        account = await svcTalos.getFromDB({ phone: number });
        return account;
    }
    async function getRandomEvents(){
        result = await svcTalos.getRandomEvents();
        return result;
    }
    async function getEventData(id){

        result = await svcTalos.getEventData(id);
        return result;
    }
    async function getCityEvents(id){
        result = await svcTalos.getCityEvents(id);
        return result;
    }

    return {
        getRandomEvents,
        getEventData,
        getCityEvents,
        test
    }
}