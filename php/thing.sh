#!/usr/bin/env sh

postcode="$1$2"
[ -z $1 ] && read -p "What postcode do you want to search? (e.g. SO14 0YN) " postcode
postcode=$(echo $postcode | tr 'A-Z' 'a-z' | sed 's/ //')

#echo "https://api.postcodes.io/postcodes/$postcode"
curl --request GET --url "https://api.postcodes.io/postcodes/$postcode" > $postcode.json
[ -s $postcode.json ] && format_json.sh $postode.json || rm $postcode.json

lat=$()
lon=$()
rad=$()

#curl --request GET --url "https://api.twitter.com/1.1/search/tweets.json?q=&geocode=$lon,$lat,$rad" --header 'authorization: OAuth Bearer="AAAAAAAAAAAAAAAAAAAAAEYdCQEAAAAAwbzvS5%2FuiDEu3qjxgB3TIRBEsI0%3DeKddwY6WA8KksYhcsb63yFbWkST1tW23LJbtXnI72gmAAoMWlq", oauth_version="2.0"' > twitter_%c.json
