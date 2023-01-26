module.exports = function AuthRequestSchema(opts) {
    const { authRequestHandlers, Joi } = opts;

    // const verifyAuthOtvc = () => {
    //     return {
    //         method: 'POST',
    //         schema: {
    //             body: Joi.object().keys({
    //                 otvc: Joi.string().required(),
    //                 phone: Joi.string().required(),
    //             })
    //         },
    //         url: '/verify/auth/otvc',
    //         handler: authRequestHandlers.verifyAuthOtvc,
    //     }
    // }

    const getRandomEvents = () => {
        return {
            method: "GET",
            url: "/randomEvents",
            handler: authRequestHandlers.getRandomEvents,
        };
    };
    const getEventData = () => {
        return {
            method: "GET",
            url: "/getEventData",
            handler: authRequestHandlers.getEventData,
        };
    };
    const getCityEvents = () => {
        return {
            method: "GET",
            url: "/getCityEvents",
            handler: authRequestHandlers.getCityEvents,
        }
    }

    const reqtest = () => {
        return {
            method: "POST",
            url: "/test",
            handler: authRequestHandlers.test,
        };
    };

    return {
        getRandomEvents,
        reqtest,
        getEventData,
        getCityEvents
    };
};
