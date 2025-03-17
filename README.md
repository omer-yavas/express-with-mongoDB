# express-with-mongoDB

# 1

npm init ile package.json oluştur

entry point: app.js olacak

# 2

npm install express

# 3

.gitignore dosyası ekle

# 4

app.js dosyasını oluştur. It's kind of a convention to have
all the Express configuration in app.js.

# 5

package.json a
"start": "nodemon app.js" ekliyoruz
(nodemon globally yüklüydü sistemde ama yine de npm install --save-dev nodemon ile nodemon'u devDependencies altında eklemiş olalım )

<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>

# 6

BİLGİSAYARI ve KENDİNİ cloud.mongoDB'ye TANIT

use a remote database hosted on a service called Atlas (MongoDB Atlas),

after login MongoDB Atlas create a project

it's time to Build a Cluster and a cluster is basically like an instance of our database

cluster a bilgisayarına ait bağlantı bilgilerini gir, (IP adresi ve username password), onayla database oluşturulsun

# 7

DATABASE i PROJENE TANIT
config.env dosyası oluştur, cluster(database instance) a ait verileri burada tanıtacaksın

NODE_ENV=development
PORT=3000
Database e ait connection String buraya yazılır
DATABASE=...connectionString/databaseName?........
DATABASE_PASSWORD=...

# 8

MongoDB Compass ile cluster e bağlan

database ve Collection Oluştur (admin, local,config adında gelenlerin yanına)

# 9

npm i dotenv
npm i mongoose

server.js dosyası oluştur

package.josn dosyasında
"start": "nodemon server.js" olarak değiştir

oluşturduğun mongoDB ye burada bağlan
