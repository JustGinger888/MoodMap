#!/usr/bin/env sh

latitude=$(php json_generator.php 2>/dev/null | cut -f1 -d,)
longitute=$(php json_generator.php 2>/dev/null | cut -f2 -d,)

sed -E "s/\$lat/$latitude/; s/\$long/$longitude/" example.json > generated.json
