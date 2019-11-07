<template>
    <!-- NAVBAR -->
    <div class="navBar">

        <!-- WEBSITE LOGO -->
        <div class="logo">
            <div class="title1" text><a class="t1" href="#"><h4>Moover</h4></a></div>
            <div class="title2" text><a class="t2" href="#"><h4>Moover</h4></a></div>
        </div>
  
        <!-- V-SPACER -->
        <v-spacer></v-spacer>
  
        <!-- TOOLBAR BUTTONS -->
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
        font-weight: 400 !important;
    }
    h2 {
        font-size: 16px;
    }
    .logo {
        margin-top: 3px;
        margin-left: 30px;
    }
    a {
        text-decoration: none;
    }
    h4 {
        font-size: 33px;
    }
    .t1 {
        color: rgba(0, 0, 0, 0.901);
    }
    .t2 {
        color: rgba(255, 72, 0, 1);
    }
    .title1, .title2 {
        position: absolute;
    }
    .title1 {
        margin-left: 1.4px;
        margin-top: 1.4px;
    }
    .title, .submit, .signUp, .logIn {
        max-height: 45px !important;
        margin-right: 20px;
        border-radius: 30px !important;
    }
    .signUp {
        height: 20px !important;
        border: 1px solid rgba(255, 72, 0, 0.733);
        border-radius: 30px !important;
        color: rgba(255, 72, 0, 0.733) !important; 
    }
    .signUp:hover {
        background-color: rgba(255, 72, 0, 0.04);
    }
    .title:hover, .submit:hover, .logIn:hover {
        color: black;
    }

  </style>