import { Bot } from "grammy";

// Create a bot using the Telegram token
const bot = new Bot(process.env.TELEGRAM_TOKEN || "");

const introductionMessage = `Chào mừng bạn đến với BOT tự động được phát hành bởi K2T-Team
<p>/hello - Chào hỏi nhau cái nhỉ.</p>
`;

const helloMessage = 'Xin chao nguoi anh em ^^';

const replyWithIntro = (ctx: any) =>
  ctx.reply(introductionMessage, {
    parse_mode: "HTML",
  });

const replyWithStart = (ctx: any) =>
  ctx.reply(helloMessage, {
    parse_mode: "HTML",
  });


bot.start();

bot.command("hello", replyWithStart);

// Suggest commands in the menu
bot.api.setMyCommands([
    { command: "hello", description: "Điền tên bạn muốn chào" },
    {
      command: "effect",
      description: "Apply text effects on the text. (usage: /effect [text])",
    },
  ]);

bot.on("message", replyWithIntro);