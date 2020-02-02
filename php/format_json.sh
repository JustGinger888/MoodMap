#!/usr/bin/env sh

file=$1

pretify() {
    # Create new lines
    sed -Ei 's/("[^"]*":"[^"]*",)/\1\n/g; s/("[^"]*":[^",]*,)/\1\n/g; s/("[^"]*":\{)/\1\n/g; s/("[^"]*":[^}]*})/\1\n/g; s/}}/}\n}/g' $file
    # Remove blank lines
    sed -i '/^\s*$/d' $file
}

getinfo() {
    echo $(grep -e "$1" -e "$2" -e "$3" -e "$4" -e "$5" -e "$6" -e "$7" $file)
}

if [ "$2" = 'pretify' ]; then
    pretify $1
elif [ "$2" = 'getinfo' ]; then
    getinfo $3 $4 $5 $6 $7 $8 $9
fi
