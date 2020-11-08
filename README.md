# STARZPLAY Censoring Filter Challenge

api can be consumed using the   url: localhost:3000/media?filter={filterType}&level={censoringLevel}


## Environment Settings and Project Startup

1) Install Nodejs latest package.
2) open project Folder in Command Prompt and run command "npm i -g".
3) open Windows  Command Prompt and go to the folder where project is placed
4) Execute Command "pm2 start index.js"



## Stopping the project

1) open Windows  Command Prompt and go to the folder where project is placed
2) Execute Command "pm2 kill"

## LIST LIBRARIES USES
1) joi     **for url Schema Validation**
2) pm2 **for deploying in PM2**
3) node-fetch **for making HTTP requests**

## Assumption 

I have assumed that filter in the URL not the level but filter comes from database for future implementation of allowing values other then **censoring**, which was valid value for query parameter ‘filter’
