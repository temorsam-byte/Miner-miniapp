nano app/api/index/route.jsexport async function POST(request) {
  const body = await request.json();

  // گرفتن chat_id از پیام دریافتی
  const chatId = body.message?.chat?.id;
  const text = "Bot is connected and ready!";

  if (chatId) {
    // ارسال پیام به تلگرام
    await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
  }

  return new Response("ok");
}

export async function GET(request) {
  return new Response("Bot is connected and ready!");
}export async function GET(request) {
  return new Response("Bot is connected and ready!");
}

export async function POST(request) {
  // بدنه‌ی درخواست تلگرام رو بخون
  const body = await request.json();
  console.log("Telegram update:", body);

  // جواب ساده برگردون
  return new Response("Bot is connected and ready!");
}export async function GET(request) {
  return new Response("Bot is connected and ready!");
}

export async function POST(request) {
  return new Response("Bot is connected and ready!");
}
