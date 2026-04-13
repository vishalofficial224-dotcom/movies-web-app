

const api = "https://api.themoviedb.org/3/movie/popular?api_key=8041959f6118e4e45b95b037b5155a9d";

export async function data(page = 1) {
    try {
            const res = await fetch(`${api}&page=${page}`);
            const allData = await res.json();
            
            
            return allData;
    } catch (err) {
        console.log("can't access data!")
    }

    
}


