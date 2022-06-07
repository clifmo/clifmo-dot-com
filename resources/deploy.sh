#!/bin/bash

cd ~/clifmo-dot-com || exit

git fetch && git pull

pnpm run build

sudo cp -R ~/clifmo-dot-com/dist/* /var/www/html/clifmo.com/public_html/

sudo chown -R www-data:www-data /var/www/html/clifmo.com/public_html/

sudo service nginx restart