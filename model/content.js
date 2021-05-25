const Model = require('../core/module');   

class ContenModel extends Model {
    constructor(){
        super();
        this.collectionName = 'content';
    }

    async getList(){
        const queryOption = {};
        const collection = await this.get(this.collectionName);
        const queryArr  = await collection.find(queryOption).toArray();

        return queryArr;
    }
}

module.exports = ContenModel
