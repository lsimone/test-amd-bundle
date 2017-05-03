import Api from 'musement_api'

const api = new Api.EventApi()



var opts = {
    'ids': [3.4], // [Number] | Given events will always be returned (will not help achieve the limit quota)
    'limit': 56, // Number | Limit quota of events to return
    'page': 56, // Number | Page from which starting to return found events (mandatory if limit is given)
    'offset': 56, // Number | Offset from which starting to return found events (mandatory if limit is given cannot be used within the page parameter)
    'countryIn': [3.4], // [Number] | Filter, include only results from given counties identified by a collection of ids
    'notCountryIn': [3.4], // [Number] | Filter, exclude results from given counties identified by a collection of ids
    'cityIn': [3.4], // [Number] | Filter, include only results from given cities identified by a collection of ids
    'notCityIn': [3.4], // [Number] | Filter, exclude results from given cities identified by a collection of ids
    'active': true, // Boolean | Filter, include results on an activation status basis
    'sortBy': 'sortBy_example' // String | Ordering criteria: [relevance|city_relevance], prepend `-` for descending order
}

var callback = function (error, data, response) {
    if (error) {
        console.error(error)
    } else {
        console.log('API called successfully. Returned data: ' + data)
    }
}
api.eventsGet(opts, callback)

