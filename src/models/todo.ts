class Todo {
  id: string;
  text: string;

  constructor(todoTxt: string) {
    this.text = todoTxt;
    this.id = new Date().toISOString();
  }
}

export default Todo;
