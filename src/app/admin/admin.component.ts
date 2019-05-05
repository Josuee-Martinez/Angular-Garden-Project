import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(e) {
    e.preventDefault(); 
    console.log(e);
    var user = e.target.elements[0].value;
    var pass = e.target.elements[1].value;
  console.log(user, pass);
  fetch('https://efa-gardenapp-backend.herokuapp.com/api/auth/login', {
  method: 'POST',
  body: JSON.stringify({
    email: user,
    password: pass
  }),
  headers: new Headers({
    'Content-Type': 'application/json'
  })
})
.then(response => response.json())
  .then(json => {
    this.storeSession(json.loggedInUser, json.token)
    this.router.navigate(['../hide'])
  })
}

  storeSession({ role }, token) {
    sessionStorage.setItem('role', role)
    sessionStorage.setItem('token', token)
  }
  
}


// delete(id) {

//   fetch(`https://efa-gardenapp-backend.herokuapp.com/api/product/${id}`, {
//     method: 'DELETE',
//     headers: new Headers({
//       Authorization: sessionStorage.getItem('token')
//     })
//   }).then(response => response.json())
//     .then(json => {
//       console.log(json)
//     })
//     .catch(error => console.error('you got an error', error))
// }

// login() {
//   fetch(`https://efa-gardenapp-backend.herokuapp.com/api/auth/login`, {
//     method: 'POST',
//     headers: new Headers({
//       Authorization: sessionStorage.getItem('token')
//     })
//   }).then(response => response.json())
//   .then(json => {
//     console.log(json)
//   })
//   .catch(error => console.error('you got an error', error))
// }


// loginUser(e) {
//   e.preventDefault(); 
//   console.log(e);
//   var username = e.target.elements[0].value;
//   var password = e.target.elements[1].value;
// console.log(username, password);
// fetch('https://efa-gardenapp-backend.herokuapp.com/api/auth/login', {
// method: 'POST',
// body: JSON.stringify({
//   email: username,
//   password: password
// }),
// headers: new Headers({
//   'Content-Type': 'application/json'
// })
// })
// .then(response => response.json())
// .then(json => {
//   this.storeSession(json.loggedInUser, json.token)
//   this.router.navigate([''])
//   window.alert("Logged in");
// })
// }

// storeSession({ role }, token) {
//   sessionStorage.setItem('role', role)
//   sessionStorage.setItem('token', token)
// }

// }


// login() {
//     fetch(`https://efa-gardenapp-backend.herokuapp.com/api/auth/login`, {
//       method: 'POST',
//       headers: new Headers({
//         Authorization: sessionStorage.getItem('token')
//       })
//     }).then(response => response.json())
//     .then(json => {
//       console.log(json)
//     })
//     .catch(error => console.error('you got an error', error))
//   }