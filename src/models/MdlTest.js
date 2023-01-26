module.exports = function MdlTest() {
    return {
        query: 'SELECT * from test limit 1',
        getRandomEvents: 'SELECT * from events limit 10',
        getEventData: 'SELECT title, description, url, price, discount from events INNER JOIN price on price.event_id = events.event_id where events.event_id = ${event_id}',
        getCityEvents: 'SELECT e.event_id, e.destination_id, e.title, e.description, e.url, i.image_url from (select x.event_id, x.destination_id, x.title, x.description, x.url from events x where x.destination_id=${destination_id}) e INNER JOIN images i ON e.event_id = i.event_id',
    }
}
