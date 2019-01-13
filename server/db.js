const Mongodb=require('mongodb').MongoClient
const dbUrl="mongodb://127.0.0.1:27017"
const dbName="cms"
class DB{
    static getStanti(){//单例
        if(DB.instan){
            return DB.instan;
        }else{
            DB.instan=new DB();
            return DB.instan;
        }
    }
    constructor(){
        this.dbClient=null;//防止重复连接数据库
        this.resMsg={code:0,msg:""};
    }
    connectDB(){
        return new Promise((resolve,reject)=>{
            if(this.dbClient){
                resolve();
            }else{
                Mongodb.connect(dbUrl,{useNewUrlParser: true },(err,client)=>{
                    if(err){
                        reject(err);
                    }else{
                        this.dbClient=client.db(dbName);
                        resolve();
                    }
                })
            }
        })
    }
    queryDB(tableName,param){
        return new Promise((resolve,reject)=>{
            this.connectDB().then(_=>{
               let res=this.dbClient.collection(tableName).find(param);
               res.toArray((err,data)=>{
                    if(err){
                        this.resMsg.msg=err;
                        reject(this.resMsg);
                    }else{
                        if(data.length>0){
                            this.resMsg.code=1;  
                            this.resMsg.msg=data;   
                        }else{
                            this.resMsg.msg="没有数据";
                        }
                        resolve(this.resMsg);
                    }
                })
            },(err)=>{
                this.resMsg.msg="数据库连接失败";
                reject(this.resMsg);
            })
        })
    }
    insertDB(tableName,param){
        return new Promise((resolve,reject)=>{
            this.connectDB().then(_=>{
                this.dbClient.collection(tableName).insert(param,(err,data)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve(data);
                    }
                })
            },(err)=>{
                this.resMsg.msg="数据库连接失败";
                reject(this.resMsg);
            })
        })
    }
    updateDB(tableName,param1,param2){
        return new Promise((resolve,reject)=>{
            this.connectDB().then(_=>{
                this.dbClient.collection(tableName).updateOne(param,{$set:param2},(err,data)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve(data);
                    }
                })
            },(err)=>{
                this.resMsg.msg="数据库连接失败";
                reject(this.resMsg);
            })
        })
    }
    removeDB(tableName,param){
        return new Promise((resolve,reject)=>{
            this.connectDB().then(_=>{
                this.dbClient.collection(tableName).removeOne(param,(err,data)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve(data);
                    }
                })
            },(err)=>{
                this.resMsg.msg="数据库连接失败";
                reject(this.resMsg);
            })
        })
    }
}
module.exports=DB.getStanti();