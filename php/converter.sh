#!/usr/bin/env sh

file=$1

latitude=$(php json_generator.php 2>/dev/null | cut -f1 -d,)
longitude=$(php json_generator.php 2>/dev/null | cut -f2 -d,)

sed -E "s/lat/$(php json_generator.php 2>/dev/null | cut -f1 -d,)/; s/lon/$(php json_generator.php 2>/dev/null | cut -f2 -d,)/" $file > generated.json
set -x
if [ "$(sed -n '/"coordinates":/{g;1!p;};h' $file | head -1 | cut -f2 -d: | sed 's/"//g; s/,//g; s/ //g')" = 'Point' ]; then
    sed -n '/"coordinates": "Point"/p' $file
elif [ "$(sed -n '/"coordinates":/{g;1!p;};h' $file | head -1 | cut -f2 -d: | sed 's/"//g; s/,//g; s/ //g')" = 'LineString' ]; then
    a
elif [ "$(sed -n '/"coordinates":/{g;1!p;};h' $file | head -1 | cut -f2 -d: | sed 's/"//g; s/,//g; s/ //g')" = 'Polygon' ]; then
    start="""$(sed -n '/"coordinates": /,/]\,/p' $file)"""
    chunk="""$(sed -n '/"coordinates": /,/]\,/p' $file | tail -4 | sed 's/,//')"""
    end="$chunk,"
    j=$2
while [ $j -gt 0 ]; do
    sed  '/\[            ]\]/a Hello World' $file
    j=$(( j - 1 ))
done
fi
set +x
