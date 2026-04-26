


const api = "https://api.themoviedb.org/3/search/movie?api_key=8041959f6118e4e45b95b037b5155a9d";

export async function dataSearch(query) {
    try {
            const res = await fetch(`${api}&query=${query}`);
            const allData = await res.json();
            
            console.log(allData)
            return allData;
    } catch (err) {
        console.log("can't access data!")
    }

    
}


