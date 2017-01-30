const connectionString:string = 'mongodb://webuser:Secret123!@ds137729.mlab.com:37729/codercampsdb';

import * as mongodb from 'mongodb';

export default class Database {
  public static db:mongodb.Db;

  public static connect() {
    return mongodb.MongoClient.connect(connectionString).then((db) => {
        console.log('Database connection succeeded!')
        this.db = db;
    }).catch((err) => {
        console.error(err);
    });
  }
}
