export const getApi = async () =>{
    const url = `http://localhost:3030/api/productos`;

    const resp = await fetch(url).then(res  => res.json());
    const {countByCategory, data} = await resp.json();
    
    console.log("getapi" , resp)

    return resp;
    
}