<template>
    <div class="navBar">

        <v-btn class="title" text><h1>Hypertube</h1></v-btn>
  
        <v-spacer></v-spacer>
  
        <v-toolbar-items>
          <v-btn class="submit" text><h2>Submit a movie</h2></v-btn>
          <v-btn class="signUp" text>Sign Up</v-btn>
          <v-btn class="logIn" text>Log In</v-btn>
        </v-toolbar-items>
  
    </div>
  </template>

  <style>
  
    .navBar {
        width: 100%;
        height: 70px;
        display: flex;
        padding: 10px;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    }

    .submit {
        font-weight: 500 !important;
    }
    
    h2 {
        font-size: 18px;
    }

    .title {
        margin-top: 5px;
    }
    
    .title, .submit, .signUp, .logIn {
        max-height: 45px !important;
        margin-right: 10px;
        border-radius: 30px !important;
    }

    .signUp {
        height: 20px !important;
        border: 1px solid rgba(255, 72, 0, 0.733);
        border-radius: 30px !important;
        color: rgba(255, 72, 0, 0.733) !important; 
    }
    .signUp:hover {
        background-color: rgba(255, 72, 0, 0.02);
    }

    .title:hover, .submit:hover, .logIn:hover {
        color: black;
    }

  </style>