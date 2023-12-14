export default {
    async fetchGet(uri) {
        const config = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };

        const res = await fetch(uri, config)
        .then(function (response) {
            return response;
        })
        .catch(function (error) { 
            console.error(`Error: ${error}`);
            return false;
        });
        
        return res;
    },

    async fetchPost(uri, data) {
        const config = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        };

        const res = fetch(uri, config)
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) { 
            console.error(`Error: ${error}`);
            return false;
        });

        return res;
    },

    async fetchPut(uri, data) {
        const config = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        const res = fetch(uri, config)
        .then(function (response) { 
            return response.json();
        })
        .catch(function (error) { 
            console.error(`Error: ${error}`);
            return false;
        });

        return res;
    },

    async fetchDelete(uri) {
        const config = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        };

        const res = fetch(uri, config)
        .then(function (response) { 
            return response.json();
        })
        .catch(function (error) { 
            console.error(`Error: ${error}`);
            return false;
        });

        return res;
    },
}