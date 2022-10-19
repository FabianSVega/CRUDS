
"use strict";
//___________________________  created DB _________________________________________

const IDBRequest = indexedDB.open("Fabianbase",1);

IDBRequest.addEventListener("upgradeneeded",()=>{
    const db = IDBRequest.result;
    db.createObjectStore("nombres",{
        autoIncrement:true
    });
})

IDBRequest.addEventListener("success",()=>{
    console.log("bien");
   
})

IDBRequest.addEventListener("error",()=>{
    console.log("mal")
})


const docu = document.getElementById("add")
docu.addEventListener("click", ()=>{
    let nombrec = document.getElementById("name").value;
    if(nombrec.length >0){
        if(document.querySelector(".imposible") != undefined){
            if(confirm("hay elementos sin guardar")){
                addObject(nombrec);
                readObject();
            }else{
                addObject(nombrec);
                readObject();
            }

        }
        addObject(nombrec);
        readObject()
        }
    
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
        console.log("objeto creado correctamente");
    })
}

//_____________________________ Read ______________________________________

const readObject = objeto =>{
    const db = IDBRequest.result;
    const IDBtransaction    = db.transaction("nombres","readonly");
    const objectStore       = IDBtransaction.objectStore("nombres");
    const cursor            = objectStore.openCursor();
    const fragment          = document.createDocumentFragment();
    document.querySelector(".nombres").innerHTML = "";
    cursor.addEventListener("success",()=>{
        if(cursor.result){
            let elemento = nombresHTML(cursor.result.key,cursor.result.value)
            fragment.appendChild(elemento);
            cursor.result.continue();
        }else document.querySelector(".nombres").appendChild(fragment)
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

//_____________________________ HTML ______________________________________

const nombresHTML=(id,nameh)=>{
    const container     = document.createElement("DIV");
    const h2            = document.createElement("h2");
    const options       = document.createElement("DIV");
    const savebutton    = document.createElement("button");
    const deletebutton  = document.createElement("button");

    container.classList.add("nombre");
    options.classList.add("options");
    savebutton.classList.add("imposible");
    deletebutton.classList.add("delete");

    savebutton.textContent   ="Guardar";
    deletebutton.textContent ="Eliminar";
    h2.textContent           = nameh;

    h2.setAttribute("contenteditable","true");
    h2.setAttribute("spellcheck","false");
    options.appendChild(savebutton);
    options.appendChild(deletebutton);

    container.appendChild(h2);
    container.appendChild(options);

    h2.addEventListener("key",()=>{
        savebutton.classList.replace("impossible")
    })

    savebutton.addEventListener("click",()=>{
        if(savebutton.className == "posible"){
            modifyObject(id,h2.textContent)
            savebutton.classList.replace("imposible");
        
        }
    })

    deletebutton.addEventListener("click",()=>{
        deleteObject(id)
        document.querySelector(".nombres").removeChild(container);

    })
    return container

}

