import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoApp';
  counter = 0;
  color = "red";
  buttonText = "hide";
  textVisiblity = "block";
  className = "cls1";
  showDiv: any = undefined;
  highlightColor = "yellow";
  colorHighlight: any = null;
  textInputValue = '';
  password = '';
  private specialCharacterString = "!@#$%&*()_?./";
  passwordObject: any = {}
  searchItem = '';
  sortField = '';
  sampleDataPipes = "how are u earthlings?";
  bookObjectArray: any = [{
      bookName: "b1",
      quantity: 10
    },
    {
      bookName: "b2",
      quantity: 7
    },
    {
      bookName: "b3",
      quantity: 12
    },
    {
      bookName: "b4",
      quantity: 7
    }
  ]

  bookPricesObject: any = {
    b1: 100,
    b2: 100,
    b3: 200,
    b4: 103
  }

  incrementCounter() {
    this.counter++;
    if (this.counter % 2 == 1) {
      this.className = "cls2";
      this.showDiv = false
    } else {
      this.className = "cls1";
      this.showDiv = true;
    }
  }

  buttonClick() {
    if (this.buttonText == "hide") {
      this.buttonText = "show";
      this.textVisiblity = "none";
    } else if (this.buttonText == "show") {
      this.buttonText = "hide";
      this.textVisiblity = "block";
    }
  }

  setValue(event: Event) {
    console.log("Event : ", event);
  }

  validatePassword() {
    // console.log(this.password)
    this.passwordObject = {}
    if (this.password.length >= 8 && this.password.length <= 15) {
      this.passwordObject.lengthCheck = true;
    }
    for (var i = 0; i < this.password.length; i++) {
      var ch = this.password.charAt(i);
      if (ch >= 'A' && ch <= 'Z') {
        this.passwordObject.characterCheck = true;
        this.passwordObject.upperCaseCheck = true;
      } else if (ch >= 'a' && ch <= 'z') {
        this.passwordObject.characterCheck = true;
        this.passwordObject.lowerCaseCheck = true;
      } else if (ch >= '0' && ch <= '9') {
        this.passwordObject.numberCheck = true;
      } else if (this.specialCharacterString.indexOf(ch) != -1) {
        this.passwordObject.specialCharacterCheck = true
      }
    }
  }

  printInParent(event:Event){
    console.log("In App Component : ",event)
  }
}
