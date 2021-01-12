# Lip In Org Reboot

## Purpose
This project was originally designed to be the solution to gifting that nobody really needed.
Now we aim to be the gift to those in need. 
This project is the front-end entry point for the charity application

## Steps to recreate:
1) Install node.js (version 10 or higher) from https://nodejs.org/en/download/
2) Open a command terminal (keyboard: windows + x, a) and create a new react app by entering:
	```npx create-react-app lip-in-org```
3) Install Visual Studio Code from https://code.visualstudio.com/download
4) Install Git Bash from https://git-scm.com/downloads
5) Install yarn by running the following in the terminal:
	```npm install -g yarn```
6) Install Github Pages by running
	```yarn add gh-pages```
7) Add the following lines to package.json:
	```"homepage": "https://{yourgithubaccount}.github.io/lip-in-org"```
	```"scripts" : { "predeploy": "yarn build", "deploy": "gh-pages -d build"}```