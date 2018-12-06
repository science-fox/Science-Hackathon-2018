
### setup webserver
Full instructions https://ecs.victoria.ac.nz/Courses/SWEN502_2018T2/WebServerWindows
Install ubuntu application for windows. In ubuntu:
`sudo apt update && sudo apt upgrade`
`sudo apt install apache2 libapache2-mod-php php-mysql php-curl php-gd php-pgsql`
`sudo ln -s /mnt/c/path/to/hackathon/ /var/www/html/hackathon`

##### TO START SERVER
sudo apache2ctl start

##### TO RESTART SERVER
sudo service apache2 restart

### Enable htaccess
Open the apache config file:
`sudo nano /etc/apache2/sites-available/000-default.conf`
At the bottom of the file, add the following lines:

> #enable .htaccess file
> <Directory /var/www/html/hackathon>
>     AllowOverride All
> </Directory>


### Database tables and credentials
CREATE TABLE Teacher ( email VARCHAR(255) PRIMARY KEY, name VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, cookie VARCHAR(255), cookie_expire   VARCHAR(255) );
CREATE TABLE Student ( email VARCHAR(255) PRIMARY KEY, name VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, cookie VARCHAR(255), cookie_expire   VARCHAR(255) );

server: sql12.freemysqlhosting.net:3306
db name: sql12268809
username: sql12268809
password: jftvPpaqd1