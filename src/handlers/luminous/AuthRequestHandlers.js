module.exports = function AuthRequestHandlers(opts) {
    const { authMediator } = opts;

    async function test(request, reply) {
        const { body, elSession } = request;
        console.log("test");
        const sent = await authMediator.test({ ...body, session: elSession });
        reply.send(JSON.stringify(sent));
    }

    async function getRandomEvents(request, reply) {
          const sent = await authMediator.getRandomEvents();
          reply.send(sent);
    }
    async function getEventData(request, reply) {
        const id = request.query.id;
        const sent = await authMediator.getEventData(id);
        reply.send(sent);
  }

    async function getCityEvents(request, reply) {
        const id = request.query.id;
        const sent = await authMediator.getCityEvents(id);
        reply.send(sent);
    }
    return {
        test,
        getRandomEvents,
        getEventData,
        getCityEvents
    };
};
