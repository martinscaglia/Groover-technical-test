<template>
    <div class="navBar">

        <v-btn class="title" text>Hypertube</v-btn>
  
        <v-spacer></v-spacer>
  
        <v-toolbar-items>
          <v-btn class="submit" text>Submit a movie</v-btn>
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

    /* .submit {
        font-weight: 500 !important;
    } */

    .title, .submit, .logIn {
        pointer-events: none;
    }

    .title, .submit, .signUp, .logIn {
        max-height: 45px !important;
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

  </style>