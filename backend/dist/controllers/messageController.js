import prisma from "../db/prisma.js";
export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: reciverId } = req.params;
        const senderId = req.user.id; //Extract the sender's user ID from the authenticated user
        //check if there is existing convo or not
        let conversation = await prisma.conversation.findFirst({
            where: {
                participantsIds: {
                    hasEvery: [senderId, reciverId] //hasevery is same as @> exists opearator  It checks if the array on the left-hand side contains all the elements of the array on the right-hand side
                }
            }
        });
        // the very first message is being sent, that's why we need to create a new conversation
        if (!conversation) {
            conversation = await prisma.conversation.create({
                data: {
                    participantsIds: {
                        set: [senderId, reciverId]
                    }
                }
            });
        }
        const newMessage = await prisma.message.create({
            data: {
                senderId,
                body: message,
                conversationId: conversation.id // Link the message to the created or existing conversation
            }
        });
        if (newMessage) {
            conversation = await prisma.conversation.update({
                where: {
                    id: conversation.id // Update the conversation using the conversation's unique ID
                },
                // saying, "Hey Prisma, I have a conversation, and I just created a new message. Now, I want to link this new message to the conversation.
                data: {
                    messages: {
                        connect: //This tells Prisma that you want to connect an existing message to the conversation
                        { id: newMessage.id },
                    },
                },
            });
            // linking the new message to the existing conversation by referencing the message's ID.
        }
        res.status(201).json(newMessage);
    }
    catch (error) {
        console.error("Error in sendMessage: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
//# sourceMappingURL=messageController.js.map