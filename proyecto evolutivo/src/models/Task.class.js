

export class TaskClass {
   name = '';
   description = '';
   completed = false;
    
   constructor(name, description, completed, level ){
        this.name = name,
        this.description = description,
        this.completed = completed,
        this.level = level
   }

   suma = function(a, b){
    return a + b
   }
}