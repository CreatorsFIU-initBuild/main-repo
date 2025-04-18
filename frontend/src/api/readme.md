## For Search API:


run npm install meiliesearch (in the front end)
then the next thing your gonna wanna do is have homebrew installed (/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
)
then after that you want to run
brew install meilisearch
and then run
meilisearch

Should see something like this
Database path: ...
Server listening on: http://127.0.0.1:7700
then if you want to change the data then you want to go to the addData.js file and change whatever it is that you want then you run this command
node src/api/addData.mjs
