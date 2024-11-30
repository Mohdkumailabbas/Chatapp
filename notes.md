Setting up[db]
npm install prisma @prisma/client  -> npx prisma init-> define table->npx prisma db push
signup flow
extract user-> all the fileds should have values ->check if there  existising user with same username->hash password->create user->gen token ->setcokkie->send data to frontend
login flow
extract user-> find username with the help of username ->match password ->gen token ->send data to frontend
