import { env } from "hono/adapter";
import { createCommentNotificationEmailTemplate, createWelcomeEmailTemplate, createConnectionAcceptedEmailTemplate } from "./emailTemplates";
import { mailtrapClient, sender } from "../lib/mailtrap";

export default async function sendWelcomeEmail(c: any,{
    email, 
    name, 
    profileUrl
    }: {
    email: string,
    name:string, 
    profileUrl:string
}){

    const apiURL = "https://send.api.mailtrap.io/api/send"  //Mailtrap API url
    const TOKEN = env(c).MAILTRAP_TOKEN

    const from = {
        email: env(c).EMAIL_FROM || "",
        name: env(c).EMAIL_FROM_NAME || ""
    }
    const recipient = [{email}]
    
    //build the email content using email template
    const htmlContent = createWelcomeEmailTemplate({name, profileUrl})

    //create an email payload
    const emailPayload = {
        from,
        to: recipient,
        subject: "Welcome to Unlinked",
        html: htmlContent,
        category: "Welcome"
    }

    try{
        const response = await fetch(apiURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${TOKEN}`
            },
            body: JSON.stringify(emailPayload)
        })

        if(response.ok)
        {
            const responseData = await response.json()
            console.log("Welcome email sent: ", responseData);
        }
        else    
        {
            console.log("Error sending email: ",response.status, response.statusText);
            const errorBody = await response.text()
            console.log("Error body : ", errorBody);

        }
        
    }catch(err)
    {
        console.log("Error from email Handler : ", err);
    }
}

export async function sendCommentNotificationEmail(c: any, {
    receipientEmail, 
    recipientName,
    commenterName, 
    postUrl, 
    commentContent} : {
    receipientEmail: string,
    recipientName: string,
    commenterName: string,
    postUrl: string,
    commentContent: string
    })
{
    const recipient = [{receipientEmail}]
    const apiURL = "https://send.api.mailtrap.io/api/send"  //Mailtrap API url
    const TOKEN = env(c).MAILTRAP_TOKEN

    try{
        //build the email content using the html template
        const htmlContent = createCommentNotificationEmailTemplate({recipientName, commenterName, postUrl, commentContent})

        //create an email payload
        const emailPayload = {
            from: commenterName,
            to: recipient,
            subject: "New Comment on Your Post",
            html: htmlContent,
            category: "comment_notification"
        }

        const response = await fetch(apiURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${TOKEN}`
            },
            body: JSON.stringify(emailPayload)
        })

        if(response.ok)
        {
            const responseData = await response.json()
            console.log("Comment notification email sent: ", responseData);
        }
        else    
        {
            console.log("Error sending email: ",response.status, response.statusText);
            const errorBody = await response.text()
            console.log("Error body : ", errorBody);

        }
    }catch(err)
    {
        console.log("Error while sending notification email ",err)
    }
}

export async function sendConnectionAcceptedEmail(c: any, {
    senderEmail, senderName, recipientName, profileUrl
}: {
    senderEmail: string, 
    senderName: string, 
    recipientName: string, 
    profileUrl: string
})
{
    const recipient = [{senderEmail}]
    const apiURL = "https://send.api.mailtrap.io/api/send"  //Mailtrap API url
    const TOKEN = env(c).MAILTRAP_TOKEN

    try{

        //build the email content using the html template
        const htmlContent = createConnectionAcceptedEmailTemplate({senderName, recipientName, profileUrl})

        //create an email payload
        const emailPayload = {
            from: senderName,
            to: recipientName,
            subject: `${recipientName} accepted your connection request`,
            html: htmlContent,
            category: "connection_accepted"
        }

        const respose = await fetch(apiURL, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${TOKEN}`
            },
            body: JSON.stringify(emailPayload)
        })
    }catch(err)
    {
        console.log("Error while sending connection accepted notification email ",err)
    }

}