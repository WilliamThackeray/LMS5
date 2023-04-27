/* RestStorageService Class template*/
/* Use this template as a starter and complete the items that say 'TODO' */
import StorageService from './storage_service'
import AppViewModel from '../Model/appViewModel.meta.js'

export default class RestStorageService extends StorageService {
    constructor(entity, entitySingle, options = {}, host) {
        super(null,null, entity, entitySingle, options);
        this.host = host;    //e.g, localhost:8080, from 'endPoint' in appViewModel
        this.isLocal = false
    }

    get hostPrefix(){
        return `http://${this.host}`
    }
    get apiName(){return this.entity;}
    get apiUrl(){
        return `${this.hostPrefix}/${this.apiName}`;
    }
    
    /* List function*/
    /* we'll give you this one */
    async list(options = this.options) {

        //note, this depends on the utility function getQueryString to create the query string
        // example:   ?SortCol=name&SortDir=asc&limit=5&offset=20
        let url = `${this.apiUrl}/${this.utils.getQueryString(options)}`;

        try {
            const response = await fetch(url);
            this.model.data = await response.json();

            console.log(this.model.data)
           
            return this.model.data;
        }
        catch (err) {
            console.log(err);
            throw (err);
        }
    }

    async read(id) {
        try{
            const response = await fetch(`${this.apiUrl}/${id}`)
            return await response.json()
        }
        catch(err){
            console.log(err);
            throw(err);
        }
        
    }

    async update(id, postData) {
        
        //Remember for update, you need to set the method to 'PUT' and headers to include
        //'Content-Type': 'application/json'
        //also remember to use JSON.stringify on the postData object before assigning to 'body'
        try {
            const response = await fetch(`${this.apiUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            }).then( out => out.json())
            return response
        }
        catch(err) {
            console.log(err)
            return null
        }
    }

    async create(postData) {
        //Remember for create, you need to set the method to 'POST' and headers to include
        //'Content-Type': 'application/json'
        //also remember to use JSON.stringify on the postData object before assigning to 'body'
        try {
            const response = await fetch(`${this.apiUrl}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            }).then( out => out.json())
            return response
        }
        catch(err) {
            console.log(err)
            return null
        }
       
    }

    async delete(id) {
        try  {
            const response = await fetch(`${this.apiUrl}/${id}`, {
                method: 'DELETE'
            }).then( out => out.json())
            return response
        }
        catch(err) {
            console.log(err)
            return null
        }
    }
    
    async getLookup(lookupName){
        let url = `${this.hostPrefix}/lookups/${lookupName}`;

        //note that the lookup result is stored in:
        //super.lookups   (this is a getter in the super class, you must prefix with super...I know, dumb)
        //I would check if the lookupName is found in super.lookups first and return
        //otherwise, I would retrieve my lookup using the lookup api, then store in super.lookups
        try {
            if (lookupName in super.lookups) {
                return this.lookup(lookupName)
            } else {
                const response = await fetch(url)
                super.lookups[lookupName] = await response.json()
                return super.lookups[lookupName]
            }
        }
        catch(err) {
            console.log(err)
            throw(err)
        }
    }

    async reset() {
        this.model.data = []
    }
    

}
export function getApi() {
    return new RestStorageService(AppViewModel.list.entity, AppViewModel.list.entitySingle, {}, AppViewModel.host)
}