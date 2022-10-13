

//___________________________  created DB _________________________________________

const IDBRequest = indexedDB.open("Fabianbase",1);

IDBRequest.addEventListener("upgradeneeded",()=>{
    const db = IDBReques.result;
    db.createObjectStore("nombres",{
        autoIncrement:true
    })})

IDBRequest.addEventListener("success",()=>{
    console.log("bien");
})

IDBRequest.addEventListener("error",()=>{
    console.log("mal")
})


//___________________________  created CRUD _________________________________________

const getIDBData= () =>{
    const db = IDBRequest.result;
    const IDBtransaction    = db.transaction("nombres","readwrite");
    const objectStore       = IDBtransaction.objectStore("nombres");
    return[objectStore,IDBtransaction]
}

//________________________ Created ______________________________________

const addObject = objeto =>{
    const IDBdata = getIDBData();
    IDBdata[0].add(objeto);
    IDBdata[1].addEventListener("complete",()=>{
        console.log("onjeto creado correctamente");
    })
}

//_____________________________ Read ______________________________________

const readObject = objeto =>{
    const db = IDBRequest.result;
    const IDBtransaction    = db.transaction("nombres","readonly");
    const objectStore       = IDBtransaction.objectStore("nombres");
    const cursor = objectStore.openCursor();
    cursor.addEventListener("success",()=>{
        if(cursor.result){
            console.log(cursor.result.value);
            cursor.result.continue();
        }else console.log("todos los datos fueron leidos")
    })}

//_____________________________ UpDate ______________________________________

const modifyObject = (key,objeto) =>{
    const IDBdata = getIDBData();
    IDBdata[0].put(objeto,key);
    IDBdata[1].addEventListener("complete",()=>{
        console.log("modificado correctamente");  
    })}

//_____________________________ UpDate ______________________________________

const deleteObject = key=>{
    const IDBdata = getIDBData();
    IDBdata[0].delete(key);
    IDBdata[1].addEventListener("complete",()=>{
        console.log("modificado correctamente");
    })}
