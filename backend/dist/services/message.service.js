"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessageService = void 0;
const cloudinary_config_1 = __importDefault(require("../config/cloudinary.config"));
const chat_model_1 = __importDefault(require("../models/chat.model"));
const message_model_1 = __importDefault(require("../models/message.model"));
const app_error_1 = require("../utils/app-error");
const socket_1 = require("../lib/socket");
const sendMessageService = async (userId, body) => {
    const { chatId, content, image, replyToId } = body;
    const chat = await chat_model_1.default.findOne({
        _id: chatId,
        participants: {
            $in: [userId],
        },
    });
    if (!chat)
        throw new app_error_1.BadRequestException("Chat not found or unauthorized");
    if (replyToId) {
        const replyMessage = await message_model_1.default.findOne({
            _id: replyToId,
            chatId,
        });
        if (!replyMessage)
            throw new app_error_1.NotFoundException("Reply message not found");
    }
    let imageUrl;
    if (image) {
        //upload the image to cloudinary
        const uploadRes = await cloudinary_config_1.default.uploader.upload(image);
        imageUrl = uploadRes.secure_url;
    }
    const newMessage = await message_model_1.default.create({
        chatId,
        sender: userId,
        content,
        image: imageUrl,
        replyTo: replyToId || null,
    });
    await newMessage.populate([
        { path: "sender", select: "name avatar" },
        {
            path: "replyTo",
            select: "content image sender",
            populate: {
                path: "sender",
                select: "name avatar",
            },
        },
    ]);
    chat.lastMessage = newMessage._id;
    await chat.save();
    //websocket emit the new Message to the chat room
    (0, socket_1.emitNewMessageToChatRoom)(userId, chatId, newMessage);
    //websocket emit the lastmessage to members (personnal room user)
    const allParticipantIds = chat.participants.map((id) => id.toString());
    (0, socket_1.emitLastMessageToParticipants)(allParticipantIds, chatId, newMessage);
    return {
        userMessage: newMessage,
        chat,
    };
};
exports.sendMessageService = sendMessageService;
