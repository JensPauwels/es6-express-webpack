import 'file-loader?name=index.html!./index.html'

class Message {
  constructor(message) {
    this.message = message;
  }

  toString = () => {
    return this.message;
  };
};

const message = new Message('Hello world');
const hello = document.getElementById("hello");
hello.innerHTML = message.toString();