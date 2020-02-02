#!/usr/bin/php
<?php

function uk_geo_generator() {
    $united_kingdom = ["north_digit" => "58",
        "north_decimal" => "6350001085",
        "east_digit" => "1",
        "east_decimal" => "68153079591",
        "south_digit" => "49",
        "south_decimal" => "959999905",
        "west_digit" => "-7",
        "west_decimal" => "57216793459"];

    $random_latitude_digit = (mt_rand($united_kingdom['south_digit'],$united_kingdom['north_digit']));
    $random_latitude_decimal = (mt_rand($united_kingdom['south_decimal'],$united_kingdom['north_decimal']));
    $random_latitude = ($random_latitude_digit . "." . $random_latitude_decimal);
    $random_longitude_digit = (mt_rand($united_kingdom['west_digit'],$united_kingdom['east_digit']));
    $random_longitude_decimal = (mt_rand($united_kingdom['west_decimal'],$united_kingdom['east_decimal']));
    $random_longitude = ($random_longitude_digit . "." . $random_longitude_decimal);
    $random_location = ($random_latitude . "," . $random_longitude);
    return $random_location;
}

echo uk_geo_generator();
?>
