const uri = "mongodb+srv://test:test@cluster0.ejxpm.mongodb.net/";
const MongoCliient = require('mongodb').MongoClient;

let baseMongodb;

class BaseMongodb{
    constructor(){
        this.mongoClient = new MongoCliient(uri,{useNewUrlParser:true,useUnifiedTopology:true});
        this.mongoClient.connect(err=>{
            if(err){
                console.log('connect db error',err)
                return
            }
            this.client = this.mongoClient;
        })

    }
    async getCllient(){
        if(!this.client){
            this.client = await this.mongoClient.connect()
        }
        return this.client
    }
}

module.exports = ()=>{
    if(!baseMongodb){
        baseMongodb = new BaseMongodb()
    }

    return baseMongodb
};
