export const fetching = function () {
    const imgRef = document.querySelectorAll('.image-wrapper img');
    const imgCaption = document.querySelectorAll('section h2');

    /* URL to fetch data from Instagram API */
    const fields = 'caption, media_url';
    const accessToken = 'IGQVJYTU4tR1JuZAUJLQkJrUXVWcHd1THl3M0xtQ1NxY0ZAzV3ZAaMWxMQ09ZAbXpvdERRelFVR2ZA1R3Y1aWk2Y2pvcXF' +
        'QdTRYcU1xYXhSYkVRQnlWR2s1Wmd3QVZANZAFdoYTdRNE9MOXVWNHNhRUNGZAzZAXbgZDZD';
    const numberOfImages = '&count=10';
    const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${accessToken}${numberOfImages}`;

    /* fetch data from Instagram API and if successful display image number 1 and image number 9 */

    function fetchImages(url) {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                } else {
                    return response.json();
                }
            })
            .then((json) => {
                imgRef[0].src = json.data[0].media_url;
                imgRef[1].src = json.data[9].media_url;
                imgCaption[0].textContent = json.data[0].caption;
                imgCaption[1].textContent = json.data[1].caption;
                return json;
            })
            .catch(e => {
                console.log(`There has been a problem with your fetch operation for resource " ${url}": ${e.message}`);
            })
            .finally(() => {
                console.log(`fetch attempt finished.`);
            });
    }

    return fetchImages(url);
};