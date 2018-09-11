# Initial Commit

#### Sep 1, 2018 by Sreeram Padmanabhan

## Summary
In the previous chapter, we setup the development environment. In this chapter, we will setup the editor for work. 

Tools like editorconfig and eslint ensure good coding practices is followed by all in the team. We will see how to integrate them into our application.

## Configure
Created your empty repository in Github or a similar service.

## Install
We are going to use npm for installing our dependencies. Make sure you have `node` and `npm` installed. 

Begin by running `npm init`. 
This will create a file called `package.json` in the root of your repository with some basic settings. We will build on top of this.

    npm init
    echo node_modules > .gitgnore

Commit and push.

    git add .
    git commit -m 'Initial Commt'
    git push --set-upstream origin master
