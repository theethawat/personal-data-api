# Theethawat Personal Data API

![Build and deploy Node.js](https://github.com/theethawat/personal-data-api/workflows/Build%20and%20deploy%20Node.js%20app%20to%20Azure%20Web%20App%20-%20tdc-theethawat/badge.svg)

Theethawat Savastham Personal Information REST API for Every one who want to get my infomation.
It's free.You can use the client just like web browser, POSTMAN, curl or anythings to test this API and you can connect it with you client app or others that you write.

## Personal Data

To get All my Personal data and my Introduction, data will go in JSON format with key name, surname, thaiName, thaiSurname, nickname, thaiNickname, birthday, hometowm, email, website, socialMedia, school and introduction. Every value are in string but in School,email,socialMedia and website it will return a map stucture of JSON key-value

    GET https://tdc-tin-personal.azurewebsites.net/personal-data/

To get only my introduction speech as long string text let this

    GET https://tdc-tin-personal.azurewebsites.net/personal-data/introduce

## Project Data

Data of my working and archieve project it’ll in format name, year, describe, stack, webiste, storySite and repository all will return you as string without stack it return array list of string.

To get All of Project data

    GET https://tdc-tin-personal.azurewebsites.net/project/

To get Specific by year you can use year 2016 to present to find it

    GET https://tdc-tin-personal.azurewebsites.net/project/:year

_Example: https://tdc-tin-personal.azurewebsites.net/project/2018 _

## My Skill

fetch all my skills on programing or devOps by fetch /skill, it will return skill percents and description.

    GET https://tdc-tin-personal.azurewebsites.net/skill

## My University

Search my all university information with all information on key department,faculty,university,campus.city.province,country,level,startYear and finishYear

    GET https://tdc-tin-personal.azurewebsites.net/university/
