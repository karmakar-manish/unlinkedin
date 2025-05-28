import { MailtrapClient } from "mailtrap";
import { env } from "hono/adapter";

export function mailtrapClient (c: any)
{
    const TOKEN = env(c).MAILTRAP_TOKEN || ""
    return new MailtrapClient({
        token: TOKEN
    })
}

export function sender (c: any) {
    return {
        email: env(c).EMAIL_FROM || "",
        name: env(c).EMAIL_FROM_NAME || ""
    }
}