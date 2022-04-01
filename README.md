# CNM35myDatabase

Welcome to my Database. This is a database using command lines in Node.js in order to add stuff to the linked database in MongoDB.

In this database you can: Add, Find, Delete and Update items within the database.

In order to start please type node index.js
To start adding stuff to the database use node index.js --add --name "" --publisher "" -- consoleRelease "" --releaseDate 0000
To list everything in the database use node index.js --find
To delete something in the database use node index.js --delete --name "<the name of the item you want to delete>"
To update something in the database use node index.js --update --name "<the name of the item you want to delete>" --name "" --publisher "" -- consoleRelease "" --releaseDate 0000
