agency
======

A Symfony project created on January 26, 2017, 3:13 am.<br/>

[Template frontend link](http://templates.theemon.com/?theme=letsdrive-html)

Steps to install project : Run the following commands inside your root project folder 
====================================================================================

- composer install 
- php bin/console doctrine:schema:update --force
- php bin/console doctrine:fixtures:load
- php bin/console assets:install --symlink web
- php bin/console server:run 
- run http://127.0.0.1:8000 on your browser and enjoy frontend interface!!
- for frontend click on login button and enter username:user ; password:user to connect
- run http://127.0.0.1:8000/admin/login and enter username:admin; password:admin to connect