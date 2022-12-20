export class Task {
  name = '' ;
  description = '';
  completed = false;
  
  constructor(name, description, completed, id){
      this.name = name;
      this.description = description;
      this.completed = completed;
      this.id = id
      }
}