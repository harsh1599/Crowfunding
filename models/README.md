# Fund Schema
| Field             | Type                  |
| ----------------- | --------------------- |
| title             | String                |
| institute         | String                |
| summary           | String                |
| goal              | Number                |
| current           | Number                |
| student           | Student (ref)         |
| investors         | Array(Investor (ref)) |
| created           | Date.now              |
| images            | Array(String)         |
| likes             | Number                |
| reviews           | Array(Review (ref))   |


# Student Schema
| Field         | Type                  |
| ------------- | --------------------- |
|   username    |   String              |
|   email       |   String              |
|   password    |   String              |
|   institute   |   String              |
|   funds       |   Array(Fund (ref))   |
|   image       |   String              |
|   created     |   Date.now            |


# Investor Schema
| Field         | Type                  |
| ------------- | --------------------- |
|   username    |   String              |
|   email       |   String              |
|   password    |   String              |
|   image       |   String              |
|   funds       |   Array(Fund (ref))   |
|   created     |   Date.now            |


# Review
| Field          | Type                  |
| -------------- | --------------------- |
| text           | String                |
| likes          | Number                |
| author         | Student / Investor    |
| created        | Date.now              |
| fund           | Fund (ref)            |