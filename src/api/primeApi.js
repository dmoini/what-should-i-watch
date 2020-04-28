

const generateParams = (limit) => {
    return {
        sources: amazon_prime,
        limit: limit ? parseInt(limit) : 10,
    };
}

const shows = ({limit}) => {
    const promise = new Promise((resolve, reject) => {
        guidebox.shows(generateParams(limit))
    })
}