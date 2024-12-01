Setting up[db]
npm install prisma @prisma/client  -> npx prisma init-> define table->npx prisma db push
signup flow
extract user-> all the fileds should have values ->check if there  existising user with same username->hash password->create user->gen token ->setcokkie->send data to frontend
login flow
extract user-> find username with the help of username ->match password ->gen token ->send data to frontend
middleware
extract token->verify it->if verified->find user with the help of userid->Attach User to req(Attaches the retrieved user object to req.user) Make the authenticated user’s data available in req.use

hasevery 
prisma.conversation.findMany({
    where: {
        participantIds: {
            hasEvery: [1, 2],
        },
    },
});

Matched Row in SQL:
conversationId	participantIds
1	             {1, 2, 3}
2                {2, 3, 4}
Row 1: {1, 2, 3}
Contains 1 and 2 (and has an extra element 3).
✅ Match
Non-Matches:
Row 2: {2, 3, 4}
Contains 2 but does not contain 1.
❌ No Match