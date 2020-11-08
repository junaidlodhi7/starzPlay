/**
 * Returns the sum of a and b
 * @param {ResponseObject} res
 * @param {JSON} data
 * @param {JSON} message
 *  @param {boolean} status
 * @returns {number}   SEND RESPONSE
 */
exports.Ok = function (res, data, message, status) {
    res.json({
        message: message,
        status: status,
        data: data

    });
}

exports.ValidFilters = (filter) => {
    let DummyFiltersFromDB = ['censoring'];
    let isExist = DummyFiltersFromDB.findIndex(element => element == filter);
    if (isExist > -1) { return true; } else { return false; }
}

exports.fetchFilteredMovies = async (movies, filter, level) => {
    let entries = await movies.json();
    let Rawmovies = [];
    for await (const iterator of entries.titles) {
        if (iterator.hasOwnProperty('contentClassification') && iterator.contentClassification.toLowerCase() == level) {
            Rawmovies.push(iterator);
            if (level.toLowerCase() == 'censored') {
                await getCensoredMedia(iterator);
            } else if (level.toLowerCase() == 'uncensored') {
                await getUnCensoredMedia(iterator);
            }
        }

    }
    let abc = Rawmovies.filter(function (element) {
        return element !== undefined;
    });
    return abc;

}

const getCensoredMedia = async function (movie) {
    let index = 0;
    for await (const key of movie.media.entries()) {
        index = key[0];
        if (!key[1].mediaGuid.endsWith('C')) {
            movie.media.splice(index, 1);
        }
    }
}
const getUnCensoredMedia = async function (movie) {
    let index = 0;
    for await (const key of movie.media.entries()) {
        index = key[0];
        if (key[1].mediaGuid.endsWith('C')) {
            movie.media.splice(index, 1);
        }
    }
}

