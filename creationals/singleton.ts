class Database{
 private static instance:Database;

 private constructor(){
   //some code for the instance creation

 }

 public static getInstance(){
   if(this.instance==null){
     this.instance=new Database()
   }
   return this.instance
 }

}

export default Database;
