#!/usr/bin/env sh

latitude=$(php json_generator.php 2>/dev/null | cut -f1 -d,)
longitude=$(php json_generator.php 2>/dev/null | cut -f2 -d,)

echo "$latitude,$longitude"
sed -E "s/\$lat/$latitude/; s/\$lon/$longitude/" example.json > generated.json
