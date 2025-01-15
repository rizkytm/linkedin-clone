import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;
const TEST_INBOX_ID = process.env.MAILTRAP_TEST_INBOX_ID;

export const mailtrapClient = new MailtrapClient({
    token: TOKEN,
    testInboxId: TEST_INBOX_ID,
});

export const sender = {
    email: process.env.EMAIL_FROM,
    name: process.env.EMAIL_FROM_NAME,
};
