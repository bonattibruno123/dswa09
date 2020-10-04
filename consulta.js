const findDocuments = function(db, callback) {
    //Get documents colletcion
    const collection = db.collection('contatos');
    //Find documents
    collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Foram encontrados os seguintes docs:");
        console.log(docs);
        callback(docs);
    });
};
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
//Connection URL
const url = 'mongodb+srv://BrunoBonatti:claronetteodeio@cluster0.yhfat.mongodb.net/ifsp?retryWrites=true&w=majority';
    //Database name
const dbName = 'ifsp';
//Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
    assert.equal(null, err);
    console.log("Aluno: Bruno Bonatti");
    console.log("Servidor Conectado");

    const db = client.db(dbName);

    findDocuments(db, function() {
        client.close();
    });
});